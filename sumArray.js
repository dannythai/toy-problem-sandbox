function sumArray (array) {
  var prev = array[0];
  var curr = array[0];

  for(var i = 1; i < array.length; i++) {
    prev = Math.max(array[i], prev + array[i]);
    curr = Math.max(prev, curr);
  }

  return curr;
}

