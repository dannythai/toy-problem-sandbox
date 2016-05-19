/*
  [[1,2]        [[3,1]
   [3,4]]  =>    [4,2]]
*/

function rotateMatrix (matrix) {
  var result = [];
  var len = matrix[0].length;
  // create new array
  for(var i = 0; i < matrix[0].length; i++) {
    var newArr = matrix.map(function(item) {
      return item[i];
    });
    result.push(newArr);
  }
  // push new array into result
  return result;
}


var result;

result = rotateMatrix([[1,2],[3,4]]);

console.log(result); // [[3,1],[4,2]]

// index 1 goes to index 0
