var binarySearchTree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

binarySearchTree.prototype.insert = function(val) {
  if(!this.value) {
    this.value = binarySearchTree(val);
  }
  if(val > this.value) {
    if(this.right) {
      recurse(this.right, val);
    } else {
      this.right.insert(val);
    }
  }
  if(val < node.value) {
    if(this.left) {
      recurse(node.left, val);
    } else {
      this.left.insert(val);
    }
  }
}

binarySearchTree.prototype.contains = function(val) {
  if(val === this.value) {
    return true;
  }
  else if (this.right && val > this.value) {
    return this.right.contains(val);
  }
  else if (this.left && val < this.value) {
    return this.left.contains(val);
  }
  else {
    return false;
  }
}

binarySearchTree.prototype.logTree = function() {
  if(this.left) {
    this.left.logTree();
  }
  console.log(this.value);
  if(this.right) {
    this.right.logTree();
  }
}
