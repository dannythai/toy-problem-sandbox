var hasCycle = function(linkedList){
  var turtle = linkedList;
  var hare = linkedList;
  while(hare.next && hare.next.next) {
    var turtle = turtle.next;
    hare = hare.next.next;
  }
  return false;
};


function Node (val) {
    // TODO
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
}

// makes linked list
var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');

var result = hasCycle(nodeA);
console.log(result);