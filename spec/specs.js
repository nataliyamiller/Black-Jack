describe('deckOfCards', function() {
  it("returns the deck of 52 cards to play with", function() {
    (expect(deckOfCards())).to.equal(52);
  });
});
