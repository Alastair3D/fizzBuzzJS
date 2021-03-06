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

  it("should be able to print 'fizz' when given the number six", function() {
    expect(fizzBuzz.play(6)).toEqual('fizz')
  });

  it("should be able to print 'buzz' when given the number five", function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  });

  it("should be able to print 'buzz' when given the number ten", function() {
    expect(fizzBuzz.play(10)).toEqual('buzz');
  });

  it("should be able to print 'fizzbuzz' when given the number fifteen", function() {
    expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
  });

  it("should be able to print 'fizzbuzz' when given the number thirty", function() {
    expect(fizzBuzz.play(30)).toEqual('fizzbuzz');
  });

  it("when printing 1-100, three should be replaced with 'fizz'", function() {
    expect(fizzBuzz.print()[2]).toEqual('fizz');
  });

  it("when printing 1-100, three should be replaced with 'fizz'", function() {
    expect(fizzBuzz.print()[5]).toEqual('fizz');
  });

  it("when printing 1-100, three should be replaced with 'fizz'", function() {
    expect(fizzBuzz.print()[4]).toEqual('buzz');
  });

  it("when printing 1-100, three should be replaced with 'fizz'", function() {
    expect(fizzBuzz.print()[9]).toEqual('buzz');
  });

  it("when printing 1-100, three should be replaced with 'fizz'", function() {
    expect(fizzBuzz.print()[14]).toEqual('fizzbuzz');
  });

  it("when printing 1-100, three should be replaced with 'fizz'", function() {
    expect(fizzBuzz.print()[29]).toEqual('fizzbuzz');
  });

});
