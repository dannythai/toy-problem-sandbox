// "a" => [" ", "a"]
// "ab" => [" ", "a", "ab", "b"]

function powerSet (string) {
  var obj = {"":true};
  var strArr = string.split('').sort();
  var recurse = function(curr, str) {
    debugger;
    for(var i = 0; i < str.length; i++) {
      var build = curr + str[i];
      obj[build] = true;
      recurse(build, str.slice(i+1));
    }
  }
  recurse("", strArr);

  return Object.keys(obj);
}
// set final array
// iterate through string
  // push each item into final array

// push entire string into final array

// return final array
