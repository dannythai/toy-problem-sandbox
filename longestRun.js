// "abbbcc" => [1, 3]

function longestRun (string) {
  var longRun = [0, 0];
  var currRun = [0, 0];
  var strArr = string.split('');
  for (var i = 1; i < strArr.length; i++) {
    if(strArr[i - 1] === strArr[i]) {
      currRun[1] = u
      if(currRun[1] - currRun[0] > longRun[1] - longRun[0]) {
        longRun = currRun;
      }
    } else {
      currRun = [i, i];
    }
  }
  return longRun;
}
