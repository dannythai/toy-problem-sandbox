// function longestPalindrome (string) {
//   var maxPally = [0,""];
//   var stringArr = string.split('');
//   for(var i = 0; i < stringArr.length; i++) {
//     var currentPally;
//   }
// }

// var pally = ['d', 'a', 'd'];
// function findPalidrome (stringArr, startIndex, endIndex) {
//   var currentPally;
//   if(startIndex !== undefined && endIndex !== undefined) {
//     if(stringArr[startIndex] === stringArr[endIndex]) {
//       findPalidrome(stringArr, startIndex-1, endIndex+1);
//       var length = endIndex - startIndex;
//       var currPally = stringArr.slice(startIndex, endIndex+1 )
//       currentPally = [length, currPally.join('')];
//     } 

//     if(stringArr[startIndex] !== stringArr[endIndex]) {
//       return;
//     }
//   }

//   if(currentPally === undefined) {
//     return
//   }
// }

// var result = findPalidrome(pally, 0, 2);
// console.log(result);

function isPalindrome (str) {
  var length =  str.length;
  if (length % 2 !== 0) {
    var a = [];
    var b = [];
    for (var i = 0; i <= Math.floor(length/2); i++) {
      a.push(str[i]);
    }
    for (var i = Math.ceil(length/2); i < length; i++) {
      b.push(str[i]);
    }
    return JSON.stringify(a) === JSON.stringify(b) ? true : false;
  }
}