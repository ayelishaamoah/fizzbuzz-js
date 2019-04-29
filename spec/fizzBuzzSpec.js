// expect it to print numbers from one to 100

describe("fizzBuzz", function() {
  it('prints fizz if 3 is entered', function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it('prints buzz if 5 is entered', function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it('prints fizzbuzz if  is entered', function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
});
