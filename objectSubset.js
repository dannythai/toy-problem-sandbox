// write a function which takes the source obj
// and outputs the target obj (a subset of source obj)

var source = {
  "a": {
    "b": {
      "a": {
        "a": 8,
        "b": 5
      }
    },
    "f": {
      "h": 3
    }
  },
  "g": {
    "b": {
      "t": 17
    },
    "k": {
      "a": 5
    }
  },
  "t": {
    "j": 11
  }
};

var target = {
  "a": {
    "b": {
      "a": {
        "a": 8,
        "b": 5
      }
    }
  },
  "g": {
    "k": {
      "a": 5
    }
  },
  "t": {
    "j": 11
  }
};

function objectSubset(source, target) {
  var newObj = {};

  for(var key in target) {
    if(source[key] !== undefined) {
      if(typeof source[key] === "object") {
        newObj[key] = objectSubset(source[key], target[key]);
      } else {
        newObj[key] = source[key];
      }
    }
  }

  return newObj;
}

var result = objectSubset(source, target);

console.log(result);
