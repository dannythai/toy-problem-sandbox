var Range = function(start, end, step) {
  this.start = start;
  this.end = end;
  this.step = step;
};

Range.prototype.size = function () {
  if(!this.step && this.start && this.end) {
    return this.end - this.start + 1;
  } else if(this.start && !this.end) {
    return 1;
  } else {
    return Math.floor(this.end/this.step);
  }
};

Range.prototype.each = function (callback) {
  if(this.end !== undefined && this.step !== undefined) {
    if(this.end > this.start) {
      for(var i = this.start; i <= this.end; i = i + this.step) {
        callback(i);
      }
    } else {
      for(var i = this.start; i >= this.end; i = i + this.step) {
        callback(i);
      }
    }
  }

  else if(this.end === undefined) {
    callback(this.start);
  }

  else if(this.end !== undefined && this.step === undefined) {
    if(this.end < this.start) {
      for(var i = this.start; i >= this.end; i--) {
        callback(i);
      }
    } else {
      for(var i = this.start; i <= this.end; i++) {
        callback(i);
      }
    }
  }

};

Range.prototype.includes = function (val) {
  var result = false;
  if(this.end === undefined) {
    if(this.start === val) {
      result = true;
    }
  } else {
    Range.prototype.each(function(item) {
      if(item === val) {
        result = true;
      }
    });
  }

  return result;
};

var x = new Range(3, 100, 3);
var y = x.includes(3);
console.log(y);
