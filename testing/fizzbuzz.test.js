const fizzBuzz = require("./fizzBuzz");

describe('fizzBuzz', () => {
    it("returns 'Fizz' for numbers divisible by 3", () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(18)).toBe('Fizz');
    });

    it("returns 'Buzz' for numbers divisible by 5", () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    it("returns 'FizzBuzz' for numbers divisible by both 3 and 5", () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it("returns the number when the number can't be divided by 3 or 5", () => {
        expect(fizzBuzz(8)).toBe(8);
    });
});