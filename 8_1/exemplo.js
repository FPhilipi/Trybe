const data = {
  animals: [
    {
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12
        },
        {
          name: 'Maxwell',
          sex: 'male',
          age: 15
        },
        {
          name: 'Faustino',
          sex: 'male',
          age: 7
        },
        {
          name: 'Dee',
          sex: 'female',
          age: 14
        }
      ]
    },
    {
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Shu',
          sex: 'female',
          age: 19
        },
        {
          name: 'Esther',
          sex: 'female',
          age: 17
        }
      ]
    },
    {
      id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
      name: 'bears',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Hiram',
          sex: 'male',
          age: 4
        },
        {
          name: 'Edwardo',
          sex: 'male',
          age: 4
        },
        {
          name: 'Milan',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Joe',
          sex: 'male',
          age: 10
        },
        {
          name: 'Tad',
          sex: 'male',
          age: 12
        },
        {
          name: 'Keri',
          sex: 'female',
          age: 2
        },
        {
          name: 'Nicholas',
          sex: 'male',
          age: 2
        },
      ]
    },
    {
      id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      name: 'otters',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Neville',
          sex: 'male',
          age: 9
        },
        {
          name: 'Lloyd',
          sex: 'male',
          age: 8
        },
        {
          name: 'Mercedes',
          sex: 'female',
          age: 9
        },
        {
          name: 'Margherita',
          sex: 'female',
          age: 10
        },
      ]
    },
    {
      id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      residents: [
        {
          name: 'Cathey',
          sex: 'female',
          age: 3
        },
        {
          name: 'Annice',
          sex: 'female',
          age: 2
        }
      ]
    },
    {
      id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      residents: [
        {
          name: 'Paulette',
          sex: 'female',
          age: 5
        },
        {
          name: 'Bill',
          sex: 'male',
          age: 6
        }
      ]
    },
    {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Gracia',
          sex: 'female',
          age: 11
        },
        {
          name: 'Antone',
          sex: 'male',
          age: 9
        },
        {
          name: 'Vicky',
          sex: 'female',
          age: 12
        },
        {
          name: 'Clay',
          sex: 'male',
          age: 4
        },
        {
          name: 'Arron',
          sex: 'male',
          age: 7
        },
        {
          name: 'Bernard',
          sex: 'male',
          age: 6
        }
      ]
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46']
    },
    {
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b']
    },
    {
      id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        '78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
        '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'
      ]
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274']
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: ['e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d']
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        '0938aa23-f153-4937-9f88-4858b24d6bce']
    }
  ],
  hours: {
    'Tuesday': { open: 8, close: 18 },
    'Wednesday': { open: 8, close: 18 },
    'Thursday': { open: 10, close: 20 },
    'Friday': { open: 10, close: 20 },
    'Saturday': { open: 8, close: 22 },
    'Sunday': { open: 8, close: 20 },
    'Monday': { open: 0, close: 0 }
  },
  prices: {
    'Adult': 49.99,
    'Senior': 24.99,
    'Child': 20.99
  }
};

const { animals, employees, hours, prices } = data;


// aqui começa Requisito 1
// function animalsByIds(...ids) {
//   return animals.filter(animal => ids.find(thoseWhich => thoseWhich === animal.id));
// }
// return animals.filter(object => ids.find(inPut => inPut === object.id));

// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46', 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d', 'ef3778eb-2844-4c7c-b66c-f432073e1c6b', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', '89be95b3-47e4-4c5b-b687-1fabf2afa274'));

// return animals.filter(animal => ids.find(id => id === animal.id));



// // for (let index = 0; index < ids.length; index += 1) {
// //     let animal = data.animals.filter(inPut => inPut.id === ids[index]);
// aqui acaba Requisito 1

// aqui começa Requisito 2

// function animalsOlderThan(animal, age) {
//     let especie = animals.filter(inPut => inPut.name === animal && inPut.residents.age > age);
//     console.log(especie);           
// }

// function animalsOlderThan(animal, age) {
//     let especie = animals.filter(inPut => inPut.name === animal).map(inPut => inPut.residents);
//     let eachAge;
//     let count = 0;
//     for (let index = 0; index < especie[0].length; index += 1) {
//         let eachAge = especie[0][index].age;
//         if (eachAge > age) {
//             count += 1;
//         }
//     }
//     if (count === especie[0].length) {
//         return true;
//     }
//     return false;
// }

// console.log(animalsOlderThan('penguins', 10));

// aqui termina Requisito 2

// aqui começa Requisito 3
// function employeeByName(employeeName) {
//     const empty = {};
//     if (employeeName === undefined) {
//       return empty;
//     }
//     return employees
//     .find(inPut => inPut.firstName === employeeName || inPut.lastName === employeeName);
// }

// console.log(employeeByName('Nelson'));

// aqui acaba Requisito 3

// aqui começa Requisito 4

// const personalInfo2 = {
//     id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//     firstName: 'John',
//     lastName: 'Doe',
// };

// const associatedWith2 = {
//   managers: [
//   'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   '9e7d4524-363c-416a-8759-8aa7e50c0992'
//     ],
//   responsibleFor: [
//       '0938aa23-f153-4937-9f88-4858b24d6bce',
//       '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//       'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
//     ]
// };

// function createEmployee(personalInfo, associatedWith) {
//     const empty = {};
//     if (personalInfo === undefined && associatedWith === undefined) {
//         return empty;
//     }
//     const object = Object.assign(empty, personalInfo, associatedWith);
//     return object;
// }

// console.log(createEmployee());

// aqui acaba Requisito 4

// aqui começa Requisito 5

// function isManager(id) {
//     let manager = data.employees.find(inPut => inPut.id === id).responsibleFor;
//     let employeesLet = data.employees.filter(inPut => inPut.id !== '').map(inPut => inPut.id);
//     console.log(manager, employeesLet);

//     for (let index = 0; index < manager.length; index += 1) {
//         for (let indexTwo = 0; indexTwo < employeesLet.length; indexTwo += 1) {
//             if (manager[index] === employeesLet[indexTwo]) {
//                 return true;
//             }            
//         }        
//     }
//     return false;
// }

// isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

// function isManager(id) {
//   return employees.some(employee => employee.managers.find(manager => manager === id));
// }

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

// aqui acaba Requisito 5

// aqui começa Requisito 6
// function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
//     employees.push(
//        {
//         id,
//         firstName,
//         lastName,
//         managers,
//         responsibleFor
//       } 
//     ); 

//     return employees;
// }

// function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
//     return employees.push(
//       {
//         id,
//         firstName,
//         lastName,
//         managers,
//         responsibleFor,
//       },
//     );
//   }
// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe'));
// console.log(addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
//       [
//         '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
//         'a67a36ee-3765-4c74-8e0f-13f881f6588a',
//       ],
//       [
//         'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
//         '210fcd23-aa7b-4975-91b7-0230ebb27b99',
//       ]));

// aqui acaba Requisito 6

// aqui começa Requisito 7

// function animalCount(species) {
//     if (!species) {
//         return animals.reduce((acc, { name, residents }) =>
//             Object.assign(acc, {
//                 [name]: residents.length,
//             }), {}
//         )
//     }
//     return animals.find(element => element.name === species).residents.length;
// }
// console.log(animalCount());

// aqui acaba Requisito 7

// aqui começa Requisito 8

// let entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 }

// function entryCalculator(entrants) {
//     if (entrants === {} || entrants === undefined) {
//         return 0;
//     }
//     const visitorId = Object.keys(entrants);
//     const visitorAmount = Object.values(entrants);
//     const totalValue = visitorAmount.reduce((acc, currentValue, index) => acc + (currentValue * prices[visitorId[index]]), 0);
//     return totalValue;
// }

// console.log(entryCalculator({ 'Child': 1 }));
// prices: {
//     'Adult': 49.99,
//     'Senior': 24.99,
//     'Child': 20.99
//   }

// aqui acaba Requisito 8

// aqui começa Requisito 10

// function wholeSchedule() {
//   const daysKey = Object.keys(hours);
//     const openClose = Object.values(hours);
//     const firstObject = openClose.reduce((acc, { open, close }, index) => {
//       if (daysKey[index] !== 'Monday') {
//         return Object.assign(acc, {
//           [daysKey[index]]: `Open from ${open}am until ${(close - 12)}pm`
//         });
//       } else if (daysKey[index] === 'Monday') {
//         return Object.assign(acc, {
//           [daysKey[index]]: 'CLOSED'
//         })
//       };
//     }, {});
//     return firstObject;
// }


// function wholeSchedule() {
//   const daysKey = Object.keys(hours);
//   const openClose = Object.values(hours);
//   return openClose.reduce((acc, { open, close }, index) => {
//     if (daysKey[index] !== 'Monday') {
//       return Object.assign(acc, {
//         [daysKey[index]]: `Open from ${open}am until ${(close - 12)}pm`
//       });
//     } else if (daysKey[index] === 'Monday') {
//       return Object.assign(acc, {
//         [daysKey[index]]: 'CLOSED'
//       })
//     };
//   }, {});

// }


// function schedule(dayName) {
//   if (!dayName) {
//     return wholeSchedule();
//   }
//   const firstObject = wholeSchedule();
//   const secondObject = {
//     [dayName]: firstObject[dayName]
//   }

//   return secondObject;
// }

// console.log(schedule('Monday'));

// aqui acaba Requisito 10

// aqui começa Requisito 11

// function oldestFromFirstSpecies(id) {
//   let array = [];
//   const trabalhador = employees.find(inPut => inPut.id === id);
//   const retorno = trabalhador.responsibleFor;
//   const x = animals.find(pet => pet.id === retorno[0]);
//   let z = x.residents[0].age;
//   let nomeAnimal;
//   (x.residents).forEach(inPut => {
//     if (inPut.age > z) {
//       z = inPut.age;
//       nomeAnimal = inPut;
//     }
//   });
//   array = [nomeAnimal.name, nomeAnimal.sex, nomeAnimal.age];
//   return array;
// }

// console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));


// aqui acaba Requisito 11

// aqui começa Requisito 12

// function increasePrices(percentage) {
//   if (percentage === 50) {
//     Object.keys(prices)[0] = parseFloat((prices.Adult * (1 + (percentage / 100))) + 0.005).toFixed(2);
//     Object.keys(prices)[1] = parseFloat((prices.Senior * (1 + (percentage / 100))) + 0.005).toFixed(2);
//     Object.keys(prices)[2] = parseFloat((prices.Child * (1 + (percentage / 100))) + 0.005).toFixed(2);
//   }
//   const mutiplier = ((1 + (percentage / 100)) * (1.5));

//   Object.keys(prices)[0] = parseFloat((prices.Adult * mutiplier) + 0.005).toFixed(2);
//   Object.keys(prices)[1] = parseFloat((prices.Senior * mutiplier) + 0.005).toFixed(2);
//   Object.keys(prices)[2] = parseFloat((prices.Child * mutiplier) + 0.005).toFixed(2);
// }

// function increasePrices(percentage) {
//   if (percentage === 50) {

//       Adult: parseFloat((prices.Adult * (1 + (percentage / 100))) + 0.005).toFixed(2),
//       Senior: parseFloat((prices.Senior * (1 + (percentage / 100))) + 0.005).toFixed(2),
//       Child: parseFloat((prices.Child * (1 + (percentage / 100))) + 0.005).toFixed(2),
//     }
//     return prices;
//   }
//   const mutiplier = ((1 + (percentage / 100)) * (1.5));

//   prices = {
//     Adult: parseFloat((prices.Adult * mutiplier) + 0.005).toFixed(2),
//     Senior: parseFloat((prices.Senior * mutiplier) + 0.005).toFixed(2),
//     Child: parseFloat((prices.Child * mutiplier) + 0.005).toFixed(2),
//   }
//   return prices;
// }

// function increasePrices(percentage) {
//   if (percentage === 50) {
//     prices.Adult = parseFloat((prices.Adult * (1 + (percentage / 100))) + 0.005).toFixed(2);
//     prices.Senior = parseFloat((prices.Senior * (1 + (percentage / 100))) + 0.005).toFixed(2);
//     prices.Child = parseFloat((prices.Child * (1 + (percentage / 100))) + 0.005).toFixed(2);
//   }
//   const mutiplier = ((1 + (percentage / 100)) * (1.5));

//   prices.Adult = parseFloat((prices.Adult * mutiplier) + 0.005).toFixed(2);
//   prices.Senior = parseFloat((prices.Senior * mutiplier) + 0.005).toFixed(2);
//   prices.Child = parseFloat((prices.Child * mutiplier) + 0.005).toFixed(2);
// }
//
//
//
// aqui acaba Requisito 12

// aqui começa Requisito 13

// console.log(employees[0].firstName);
let A;
let B;
let C;


  A = employees[0].firstName;
  B = employees[0].lastName;
  C = `${A} ${B}`


  const obj = {
    [`${employees[0].firstName} ${employees[0].lastName}`] : 'oi',
  }

// console.log(obj);

const { firstName, lastName, id, responsibleFor, managers } = employees;

let array = [];
employees.forEach(inPut => 
  array.push(inPut.responsibleFor)
);
console.log(array);

// for (let index = 0; index < array.length; index++) {
  // console.log(array[index].length);
  // console.log("primeiro for");
//   for (let index2 = 0; index2 < array[index].length; index++) {
//     console.log("segundo for");
//     console.log(array[index][index2]);
//     let array2 = [];
//     const element = array[index][index2];
//     array2.push(element);        
//   }  
// }

// const obj2 = {
//   [`${firstName[0]} ${lastName[0]}`] : 'oi',
// }

// console.log(obj2);




// return animals.filter(object => ids.find(inPut => inPut === object.id));

// console.log(animalsFiltered);

// const expected = {
//   'Nigel Nelson': ['lions', 'tigers'],
//   'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
//   'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
//   'Wilburn Wishart': ['snakes', 'elephants'],
//   'Stephanie Strauss': ['giraffes', 'otters'],
//   'Sharonda Spry': ['otters', 'frogs'],
//   'Ardith Azevado': ['tigers', 'bears'],
//   'Emery Elser': ['elephants', 'bears', 'lions']
// };

function employeeCoverage(idOrName) {
  const result = {};

  let filteredEmployees;
  if (!idOrName) {
    filteredEmployees = data.employees;
  } else {
    filteredEmployees = data.employees
    .filter(employee => (employee.id === idOrName) || 
    (employee.firstName === idOrName) || 
    (employee.lastName === idOrName));
  }
  filteredEmployees.forEach((employee) => {
    const mappedAnimals = employee.responsibleFor
    .map((animalIdResponsabibleFor) => {
      const foundAnimalName = data.animals
      .find(animal => animal.id === animalIdResponsabibleFor).name;
      return foundAnimalName;
    });
    result[`${employee.firstName} ${employee.lastName}`] = mappedAnimals;
  });
  return result;
}








