const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = words => {
    const newArray = [];
    for (index in words) {
    newArray.push(words[index].split('').length);    
    }
    return newArray;
}

const output = wordLengths(words);

// assert.strictEqual(typeof wordLengths, 'function');

assert.deepEqual(output, expected);