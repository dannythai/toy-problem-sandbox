var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(a, b){
  var commonAncestor;

  if(a === this || b === this) {
    return this;
  }
  var arrayA = this.getAncestorPath(a);
  var arrayB = this.getAncestorPath(b);

  if(arrayA === null || arrayB === null) {
    return null;
  }

  for(var i = 0; i < arrayA.length - 1; i++) {
    for(var j = 0; j < arrayB.length - 1; j++) {
      if(arrayA[i] === arrayB[j]) {
        commonAncestor = arrayA[i];
      }
    }
  }

  return commonAncestor;
}

Tree.prototype.getAncestorPath = function(target){
  if(!this.isDescendant(target)) {
    return null;
  } else {
    for(var i = 0; i < this.children.length; i++) {
      if(this.children[i] === target) {
        return [this, this.children[i]];
      } else {
        if(this.children[i].isDescendant(target)) {
          return [this].concat(this.children[i].getAncestorPath(target));
        }
      }
    }
  }

}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
