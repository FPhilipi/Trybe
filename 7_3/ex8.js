const assert = require('assert');

const numbers = [9, 23, 10, 3, 8];
const expected = 53;


const addAllnumbers = numbers => {
    let sum = 0;
    for (index in numbers) {
        sum += numbers[index];
    }
    return sum;    
}

// addAllnumbers(numbers);

const output = addAllnumbers(numbers);

// assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);