function spiralTraversal (arr) {
  var output = [];
  while(arr.length) {
    var top = arr.shift();
    output = output.concat(top);

    if(arr.length > 0)
      arr = arr[0].map(function (_, i) {
        return arr.map(function (ele) {
          return ele[top.length - i - 1];
        });
      });
  }
  return output;
}

var spiralTraversal = (a, z = []) => {
  while(a.length) {
    [x, z] = [a.shift(), z.concat(x)]
    var x = a.shift();
    z = z.concat(x);
    if(a.length > 0) {
      a = a[0].map((_,i) => a.map((e) => e[x.length-i-1]))
    }
  }
  return z;
}















// loop through matrix
  // loop through 

// import itertools

var arr = [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]  

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16

/*

1  2  3  4
12 13 14 5
11 16 15 6
10 9  8  7

5 6 7 

8 9 10

11 12

13 14

15 16


*/

console.log(spiralTraversal(arr))

