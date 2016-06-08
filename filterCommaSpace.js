// target: ['abes', 'bvg', 'xv', 'gt', 'ab']
var a = "abes, bvg xv, gt  ab";

// method 1
var result = a.split(/[\s,]+/);
// method 2
var result2 = separate(a);

function separate(str) {
  var newArr = [];

  var arr1 = str.split(',');
  console.log('1: ', arr1);

  var joinStr = arr1.join(' ');
  console.log('2: ', joinStr);

  var arr2 = joinStr.split(' ');
  console.log('3: ', arr2);

  for(var i = 0; i < arr2.length; i++) {
    if(arr2[i].length) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

console.log(result);
console.log(result2);
