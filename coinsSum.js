var coins = [1,2,5,10,20,50,100,200];

var collection = {

}
var addUp = function(a, b) {
  return a + b;
}

function coinSums (total) {
  // var counter = 0;
  collection[total] = [];
  var totalArr = collection[total];

  var recurse = function(comboArr) {

    var sum = sum || 0;
    for(var i = 0; i < coins.length; i++) {
      if(coins[i] === total && sum === 0) {
        // counter++;
        totalArr.push()
        break;
      }

      if(sum > total) {
        return;
      }

      sum += coins[i];

      if(sum === total) {
        counter++;
        return;
      }

      recurse(sum);
    }
  };

  recurse();
  return counter;
};

var result = coinSums(5);
console.log(result);var coins = [1,2,5,10,20,50,100,200];

var collection = {

}
var addUp = function(a, b) {
  return a + b;
}

function coinSums (total) {
  // var counter = 0;
  collection[total] = [];
  var totalArr = collection[total];

  var recurse = function(comboArr) {

    var sum = sum || 0;
    for(var i = 0; i < coins.length; i++) {
      if(coins[i] === total && sum === 0) {
        // counter++;
        totalArr.push()
        break;
      }

      if(sum > total) {
        return;
      }

      sum += coins[i];

      if(sum === total) {
        counter++;
        return;
      }

      recurse(sum);
    }
  };

  recurse();
  return counter;
};

var result = coinSums(5);
console.log(result);

