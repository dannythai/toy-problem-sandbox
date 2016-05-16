var options = {
  1: ["1"],
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
  0: ["0"]
}

// 0002 ["000A", "000B", "000C"]

function telephoneWords (digitString) {
  var combos = [];

  // for(var i = 0; i < digitString.length; i++) {
  //   var number = digitString.charAt(i);
  // }

  var recurse = function(currStr) {
    // Base
    if(currStr.length === digitString.length) {
      combos.push(currStr);
      return;
    }
    var letters = options[digitString.charAt(currStr.length)]
    for(var i = 0; i < letters.length; i++) {
      recurse(currStr + letters[i]);
    }

  }
  
  recurse("");

  return combos;
}

console.log(telephoneWords("0002"));