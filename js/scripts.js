
var createDeck = function() {
  var deck = [];
  var cardRanks = new Array("Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King");
  var cardSuits = new Array("C", "D", "H", "S");

  for (var i = 0; i < cardRanks.length; i++) {
    for (var j = 0; j < cardSuits.length; j++) {
      deck.push([cardRanks[i], cardSuits[j]]);
    }
  }
  return deck;
}

var shuffleDeck = function(deck) {
  var tmp, i, j;

  for (i = deck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = deck[j];
    deck[j] = deck[i];
    deck[i] = tmp;
  }
  return deck;
}
