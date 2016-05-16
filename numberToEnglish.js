var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

var numberToEnglish = function(number, word) {
  var word = word || "";
  if(number < 100 && number % 10 === 0 || number < 21) {
    return word + numbersToWords[number];
  }
  if(number < 100) {
    var tensPlace = Math.floor(number/10) * 10;
    var onesPlace = numbersToWords[number - tensPlace];
    word += numbersToWords[tensPlace] + "-" + onesPlace;
    return word;
  }
  if(number > 99 && number < 1000) {
    var hundredsPlace = Math.floor(number/100);
    word += numbersToWords[hundredsPlace] + " hundred";
    var remainder = number - (hundredsPlace * 100);
    if(remainder) {
      word += " ";
      return numberToEnglish(remainder, word);
    }
    return word;
  }
  if(number > 999 && number < 10000) {
    var thousandsPlace = Math.floor(number/1000);
    var remainder = number - (thousandsPlace*1000);
    word += numbersToWords[thousandsPlace] + " thousand";
    if(remainder) {
      word += " ";
      return numberToEnglish(remainder, word);
    }
    return word;
  }
  if(number > 9999) {
    var divisor = 1000;
    var highestPlace = Math.floor(number/divisor);
    while(highestPlace > 999) {
      divisor = divisor * 1000;
      highestPlace = Math.floor(number/divisor);
    }
    var section = Math.floor(number/divisor);
    var remainder = number - (section * divisor);
    word += numberToEnglish(section) + " " + numbersToPlace[divisor];
    if(remainder) {
      word += " ";
      return numberToEnglish(remainder, word);
    }
    return word;
  }
};

