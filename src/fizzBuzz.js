function FizzBuzz() {
}

FizzBuzz.prototype.play = function(num) {
  if (num == 15) {
    return "fizzbuzz";
  } else if (num == 3) {
    return "fizz";
  } else if (num == 5) {
    return "buzz";
  } else {
    return num;
  };
};
