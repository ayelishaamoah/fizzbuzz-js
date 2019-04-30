function FizzBuzz() {
}

FizzBuzz.prototype.play = function (number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else {
    return number
  }
}

var maxNumber = 100

var fizzBuzz = new FizzBuzz();

for (i = 1; i <= maxNumber; i++) {
  console.log("Number " + i);
  console.log(fizzBuzz.play(i));
}
