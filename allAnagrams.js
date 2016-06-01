function allAnagrams (str) {
  var result = [];
  var recurse = function (curr, strArr) {
    if(curr.length === str.length) {
      result.push(curr);
      return;
    }
    for(var i = 0; i < strArr.length; i++) {
      var build = curr + strArr[i];
      recurse(build, strArr.slice(0, i) + strArr.slice(i+1));
    }
  }
  recurse('', str);
  return result;
}
