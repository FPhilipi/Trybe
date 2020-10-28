const assert = require('assert');
let words = ['house', 'train', 'slide', 'needle', 'book'];
const findTheNeedle = (words, string) => {
    for (let index = 0; index < words.length; index++) {
        if (words[index] === string) {
            return index;
        }        
    }
return -1;
}

// findTheNeedle(words, 'needle');


// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);