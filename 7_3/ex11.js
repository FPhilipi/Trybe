const assert = require('assert');

const greetPeople = (people) => {
    const greeting = 'Hello ';
    let array = [];
    let helloName = "";
    for (const person in people) {
      let name = "";      
      name = people[person].toString();      
      helloName = `${greeting}${name}`;
      array.push(helloName);
    }          
    return array;    
};
  
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
// console.log(greetPeople(parameter));

assert.deepStrictEqual(greetPeople(parameter), result);