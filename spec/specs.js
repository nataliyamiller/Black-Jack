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
