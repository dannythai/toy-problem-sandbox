var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  var node = new Tree(value);
  this.children.push(node);
}

var myTree = new Tree(5);
myTree.addChild(7);
myTree.addChild(11);
myTree.children[0].addChild(4);
myTree.children[0].addChild(8);
myTree.children[1].addChild(9);
myTree.children[1].addChild(12);

// check myTree structure
console.log(myTree);

// Helper
var Queue = function() {
  var storage = [];

  this.enqueue = function(item) {
    storage.push(item);
  };

  this.dequeue = function() {
    return storage.shift();
  };
};

var breadthFirstSearch = function(root) {
  var queue = new Queue;
  var queueLength = 0;
  queue.enqueue(root);
  queueLength++;
  while(queueLength > 0) {
    var first = queue.dequeue();
    console.log(first.value);
    for(var i = 0; i < first.children.length; i++) {
      queue.enqueue(first.children[i]);
      queueLength++;
    }
    queueLength--;
  }
}

breadthFirstSearch(myTree);
