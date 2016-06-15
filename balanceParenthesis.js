// input: ["()[]{}", "[{]}"]
// output ["YES", "NO"]
var dict = {
  "[": "]",
  "{": "}",
  "(": ")"
};

function isBalance(str) {
  var stack = [];
  for(var i = 0; i < str.length; i++) {
    if(str[i] === "[" || str[i] === "{" || str[i] === "(") {
      stack.push(str[i]);
    } else {
      var last = stack.pop();
      if(str[i] !== dict[last]) {
        return "NO";
      }
    }
  }

  if(stack.length > 0) {
    return "NO";
  }

  return "YES";
}

function balanceStuff(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    newArr.push(isBalance(arr[i]));
  }

  return newArr;
}

console.log(balanceStuff(["()[]{}", "[{]}"]));
