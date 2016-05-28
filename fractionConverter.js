// converts decimals into fractions
function fractionConverter (number) {
  var denominator = 1;
  var numerator = number;

  // convert the decimal into integers
  while(numerator % 1 !== 0) {
    numerator = numerator * 10;
    numerator = numerator.toFixed(6);
    denominator = denominator * 10;
  }

  var divisor = gcd(numerator, denominator);

  function gcd(a, b) {
    if(!b) {
      return a;
    }
    return gcd(b, a % b);
  }

  return numerator/divisor + '/' + denominator/divisor;
}
