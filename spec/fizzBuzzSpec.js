describe("fizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new fizzBuzz();
  });

  it("should be able to print the number one", function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  });

});
