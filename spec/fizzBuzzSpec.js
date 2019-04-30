// expect it to print numbers from one to 100

describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('prints fizz if 3 is entered', function() {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });

    it('prints fizzbuzz if 6 is entered', function() {
      expect(fizzBuzz.play(6)).toEqual("Fizz");
    });
  });

  describe('multiples of 5', function() {
    it('prints buzz if 5 is entered', function() {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
    });
  });

  describe('multiples of 3 and 5', function() {
    it('prints fizzbuzz if 15 is entered', function() {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    });
  });

  describe('remaining numbers', function() {
    it('prints 1 if 1 is entered', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  });

});
