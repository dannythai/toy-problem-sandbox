var shuffleDeck = function(deck) {
  var remaining = deck.length;
  var t;
  var selection;

  while(remaining) {
    selection = Math.floor(Math.random() * remaining--);

    t = deck[remaining];
    deck[remaining] = deck[selection];
    deck[selection] = t;
  }

  return deck;
}
