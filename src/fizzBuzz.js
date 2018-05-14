function FizzBuzz() {
}

FizzBuzz.prototype.play = function(num) {
  if (num == 3) {
    return "fizz";
  } else {
    return num;
  };
};
