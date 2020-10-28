const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];

    for (let i = 0; i < characters.length; i += 1) {
        if (characters[i] === 'a') {
            characters[i] === '1';
        } 
        if (characters[i] === 'o') {
            characters[i] === '1';
        }
            characters[i] === 'i' ||
            characters[i] === 'e' ||
            characters[i] === 'u'
        ) {
            results.push(characters[i]);
        } else {
            results.push('_');
        }
    }
    return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

console.log(removeVowels(parameter));