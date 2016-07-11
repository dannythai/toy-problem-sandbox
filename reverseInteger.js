// reverse the sequence of digits in a given integer
function reverseInteger (n) {
  var reverse = 0;
  while(n !== 0) {
    reverse = (reverse * 10) + n%10; // rev is 0
    n = Math.floor(n/10); //n = 0
  }
  return reverse;
}

