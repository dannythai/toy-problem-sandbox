function characterFrequency (string) {
  var result = [];
  var obj = {};
  var stringsArr = string.split('');

  for(var i = 0; i < stringsArr.length; i++) {
    if(stringsArr[i] in obj) {
      obj[stringsArr[i]]++;
    } else {
      obj[stringsArr[i]] = 1;
    }
  }

  for(var key in obj) {
    result.push([key, obj[key]]);
  }

  result.sort(function(a, b) {
    // console.log('this is a: ', a[1]);
    // console.log('this is b: ', b[1]);
    // console.log('result ', b[1] - a[1]);
    // return b[1] - a[1];

    // test

    if(a[1] > b[1]) {
      return -1;
    }
    if(a[1] < b[1]) {
      return 1;
    }
    if(a[1] === b[1]) {
      if(a[0] > b[0]) {
        return 1;
      }
      if(a[0] < b[0]) {
        return -1;
      }
    }
  });

  return result;
}

console.log(characterFrequency("supercalifragilisticexpialidocious"));

// [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
