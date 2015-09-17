describe('cardValues', function() {
  it("assigns card names to numeric values", function() {
    expect(cardValues()[1]).to.eql(["2", 2]);
  });

  it("assigns card names to numeric values", function() {
    expect(cardValues()[0]).to.eql(["Ace", 11]);
  });

  it("assigns card names to numeric values", function() {
    expect(cardValues()[10]).to.eql(["Jack", 10]);
  });
});

describe('createDeck', function() {
  it("returns the deck of 52 cards to play with", function() {
    expect(createDeck().length).to.equal(52);
  });

  it("returns a card rank with a correspondng card suit", function() {
    expect(createDeck()[4]).to.eql(["2", "C"]);
  });
});

describe('shuffleDeck', function() {
  it("returns randomized deck of cards", function() {
    var deck = createDeck();
    expect(shuffleDeck(deck)).to.be.instanceOf(Array);
  });
});

describe('randomCard', function() {
  it("returns randomly selected card from the deck of cards", function() {
    var deck = createDeck();
    expect(randomCard(deck)).to.be.instanceOf(Array);
  });
});
