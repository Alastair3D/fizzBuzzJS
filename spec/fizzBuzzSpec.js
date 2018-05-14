describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should be able to print the number one", function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  });

  it("should be able to print the number two", function() {
    expect(fizzBuzz.play(2)).toEqual(2);
  });

  it("should be able to print 'fizz' when given the number three", function() {
    expect(fizzBuzz.play(3)).toEqual('fizz');
  });

  it("should be able to print 'buzz' when given the number five", function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  });

  it("should be able to print 'fizzbuzz' when given the number fifteen", function() {
    expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
  });

  it("should be able to print 'fizz' when given the number six", function() {
    expect(fizzBuzz.play(6)).toEqual('fizz')
  });

});
