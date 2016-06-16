// cut each number in array by lowest non-zero value, console log how many cuts were made
// problem: https://www.hackerrank.com/challenges/cut-the-sticks
// [8, 4, 2, 0, 3] => 4 (how many cuts)
// [6, 2, 0, 0, 1] => 3
// [5, 1, 0, 0, 0] => 2
// [4, 0, 0, 0, 0] => 1
// [0, 0, 0, 0, 0]

function findMin(arr) {
  var min;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] !== 0) {
      if(!min) {
        min = arr[i;]
      } else {
        if(min > arr[i]) {
          min = arr[i];
        }
      }
    }
  }
  return min;
}

function sum(a, b) {
  return a + b;
}

function chopNumbers(arr) {
  var min = findMin(arr);
  while(arr.reduce(sum) !== 0) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        arr[i] =- min;
        count++
      }
      if(arr[i] < 0) {
        arr[i] = 0;
      }
      console.log(count);
    }
    min = findMin(arr);
  }
}
