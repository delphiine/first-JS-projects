const multiply = require("./multiply");

describe('multiply', () => {
    it('multiplies 5 and 5', () => {
        expect(multiply(5, 5)).toBe(25);
    });
});