
var cardNames = function() {
  var names = new Array("Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King");
  return names;
}

var cardValues = function() {
  var values = new Array();
  var names = cardNames();
  for (var i = 0; i < names.length; i++) {
    if (names[i] === "Ace") {
      values.push([names[i], 11]);
    } else if (names[i] === "Jack" || names[i] === "Queen" || names === "King") {
      values.push([names[i], 10]);
    } else {
      values.push([names[i], parseInt(names[i])]);
    }
  }
  return values;
}

var createDeck = function() {
  var deck = [];
  var names = cardNames();
  var suits = new Array("C", "D", "H", "S");

  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      deck.push([names[i], suits[j]]);
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
