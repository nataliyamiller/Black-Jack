describe('createDeck', function() {
  it("returns the deck of 52 cards to play with", function() {
    expect(createDeck().length).to.equal(52);
  });

  it("returns a card rank with a correspondng card suit", function() {
    expect(createDeck()[0]).to.eql(["Ace", "C"]);
  });
});
