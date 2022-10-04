// Task 1
const stringLength = (string) => {
    const lengthOfString = string.length;
    if (lengthOfString < 1 || lengthOfString > 10){
        throw new Error('String length must be greater than 1 and less than 10');
    }
    return lengthOfString;
}


// Task 2
const reverseString = (string) => string.split('').reverse().join('');



// Task 3
class Calculator {
    add = (a , b) => a + b;
    subtract = (a , b) => a - b;
    multiply = (a, b) => a * b;
    divide = (a , b) => a / b;
}
const calculator = new Calculator();

// Task 4
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1); 




module.exports = { stringLength, reverseString, calculator, capitalize };