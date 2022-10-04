const { stringLength, reverseString, calculator, capitalize } = require('./stringFunctions.js');

// test for string length
it("Length of String", () => {
    expect(stringLength("hello")).toBe(5);
});

it('Length less than 1 or greater than 10', () => {
    expect(stringLength('awesomeness')).toThrow(Error);
});

// test for reverse
it("Reversed String", () => {
    expect(reverseString('hello')).toBe('olleh');
})

// test for calculator
describe('Calculator', () => {
    it('addition', () => {
        expect(calculator.add(1, 1)).toBe(2);
        expect(calculator.add(2, 2)).toBe(4);
        expect(calculator.add(3, 3)).toBe(6);
    });
    it('subtraction', () => {
        expect(calculator.subtract(2, 1)).toBe(1);
        expect(calculator.subtract(10, 5)).toBe(5);
        expect(calculator.subtract(4, 5)).toBe(-1);
    });
    it('multiplication', () => {
        expect(calculator.multiply(4, 5)).toBe(20);
        expect(calculator.multiply(1, 1)).toBe(1);
        expect(calculator.multiply(3, -8)).toBe(-24);
    });
    it('division', () => {
        expect(calculator.divide(10, 2)).toBe(5);
        expect(calculator.divide(15, 3)).toBe(5);
        expect(calculator.divide(2, 2)).toBe(1);
    });

})

// test for capitalization
it('capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
})