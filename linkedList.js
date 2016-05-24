var linkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(val) {
  this.value = val;
  this.next = null;
}

// remove, addToTail, insert, addToHead, contains

linkedList.prototype.addToTail = function(val) {
  var newTail = new Node(val);

  if(this.head === null) {
    this.head = newTail;
    this.tail = newTail;
  } else {
    this.tail.next = newTail;
    this.tail = newTail;
  }

}

linkedList.prototype.removeNode = function(val) {
  var removed = null;
  var currNode = this.head;

  if(currNode) {
    while(currNode && currNode.value === val) {
      removed = this.head;
      this.head = this.head.next;
      currNode = this.head;
    }

    while(currNode && currNode.next !== null) {
      if(currNode.next.value === val) {
        removed = node.next;
        currNode.next = node.next.next;
      }

      if(currNode.next.value !== val) {
        currNode = currNode.next;
      }
    }
  }

  return removed;
}

linkedList.prototype.removeAt = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}
