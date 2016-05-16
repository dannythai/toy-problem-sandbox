var bind = function(func, context){
  var args = [].slice.call(arguments);
  args = args.slice(2)
  return function(){
    var newArgs = [].slice.call(arguments);
    for(var i = 0; i < newArgs.length; i++) {
      args.push(newArgs[i]);
    }

    var copy = func.apply(context, args);
    for(var i = 0; i < newArgs.length; i++) {
      args.pop();
    }
    return copy;
  }
};  

Function.prototype.bind = function(context) {
  var args = [].slice.call(arguments);
  args = args.slice(1);
  var That = this;
  return function(){
    var newArgs = [].slice.call(arguments);
    for(var i = 0; i < newArgs.length; i++) {
      args.push(newArgs[i]);
    }
    
    var copy = That.apply(context, args);
    for(var i = 0; i < newArgs.length; i++) {
      args.pop();
    }
    return copy;
    
  }
};