describe("fizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should be able to print the number one", function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  });

  it("should be able to print the number two", function() {
    expect(fizzBuzz.play(2).toEqual(2));
  });

});
