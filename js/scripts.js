// var totalCards = function() {
//   var cardRanks = new Array("Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King");
//   var cardSuits = new Array("C", "D", "H", "S");
//   var totalCards = cardRanks.length * cardSuits.length;
//   return totalCards;
// }

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
