// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return a string if divisible by 3 or 5', function() {
    const divisible = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 25, expected: 'buzz'},
      {num: 9, expected: 'fizz'},

    ];
    divisible.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return the input number if not divisible by 3 or 5', function() {
    const indivisible = [
      {num: 1, expected: 1},
      {num: 2, expected: 2},
      {num: 98, expected: 98},
      {num: -7, expected: -7}
    ];
    indivisible.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg not number', function() {
    const badInputs = [
      ['a'],
      ['1'],
      [true]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});