var deckOfCards = function() {
  var cardRanks = new Array("Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King");
  var cardSuits = new Array("C", "D", "H", "S");
  var deckTotal = cardRanks.length * cardSuits.length;
  return deckTotal;
}
