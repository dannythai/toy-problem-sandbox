var block = function() {
  return new Promise(function(resolve, reject) {
    resolve(5);
  });
}

var p = (function() {
  return new Promise(function (resolve, reject) {
      block()
      .then(function(num) {
        if(num > 4) {
          console.log(num);
          resolve();
         
        }
      });
    });
})();

p.then(function() {
  block()
  .then(function() {
    console.log('Block resolved');
    return 'Bob';
  })
  .then(function(name) {
    console.log('Hi ' + name);
  })
}).catch(function() {
  console.log('Caught');
})

