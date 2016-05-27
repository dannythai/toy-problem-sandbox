// "a" => [" ", "a"]
// "ab" => [" ", "a", "ab", "b"]

function powerSet (string) {
  var obj = {};
  var recurse = function(str) {
    obj[str] = true;
    for(var i = 0; i < str.length; i++) {
      var chunk = string.splice(i, str.length - 1 + i)
      recurse(chunk);
    }
  }
  recurse(string);
  return Object.keys(obj);
}
// set final array
// iterate through string
  // push each item into final array

// push entire string into final array

// return final array
