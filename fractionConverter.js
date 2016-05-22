function fractionConverter (number) {
  var negative = false;

  var denominator = 1;
  var numerator = number;

  if(number < 0) {
    numerator = Math.abs(numerator);
    negative = true;
  }

  if(number % 1 === 0) {
    if(negative) {
      return '-' + numerator + '/1';
    }
    return numerator + '/1';
  }
  // isolate the decimal

  // convert the decimal into a fraction
  while(numerator % 1 !== 0) {
    numerator = numerator * 10;
    numerator = numerator.toFixed(6);
    denominator = denominator * 10;
  }

  var lcd;
  // find the lowest common denominator
  for(var i = numerator; i >= 0; i--) {
    if(numerator % i === 0 && denominator % i === 0) {
      lcd = i;
      break;
    }
  }

  if(!lcd) {
    if(negative) {
      return '-' + numerator + '/' + denominator;
    }
    return numerator + '/' + denominator;
  }
  var numerator = numerator/lcd;
  var denominator = denominator/lcd;

  var fraction = numerator + '/' + denominator;

  if(negative) {
    return '-' + fraction;
  }

  return fraction;
}
