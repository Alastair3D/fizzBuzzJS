function FizzBuzz() {
}

FizzBuzz.prototype.play = function(num) {
  if (num % 15 == 0) {
    return "fizzbuzz";
  } else if (num % 3 == 0) {
    return "fizz";
  } else if (num % 5 == 0) {
    return "buzz";
  } else {
    return num;
  };
};

FizzBuzz.prototype.print = function() {
  var arr = [];
  for (var i = 0; i < 100; i++) {
    arr[i] = this.play(i + 1);
  };
  return arr
};
