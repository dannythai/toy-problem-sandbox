//input string - output: array
// create an empty array called results
// create an options variable containing possible options
// recursive function
    // input leftover options, current string build

    // loop through input recursive options
      // select letter and push it to the string build
      // remove option letter from string using slice

    // check if length of the current string build equals the input string
      // if yes, push the string into the results array and return
      // if not then recurse passing in the string build, and leftover options from iteration

// return results array


var allAnagrams = function(str) {
  debugger;
  var results = [];
  var optionsArr = str.split('');

  var recurse = function(build, options) {
    if(build.length === str.length) {
      build.join('')
      results.push(build);
    }

    for(var i = 0; i < options.length; i++) {
      build.push(options[i]);
      recurse(build, options)
      // build.push(options[i]);
      // options.splice(i,1);
      // recurse(build, options);
    }
  }

  recurse([], optionsArr);

  return results;
}

console.log(allAnagrams("abc"));