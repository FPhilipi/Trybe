function maiorPalavra(palavras) {
     let maiorPalavra = palavras[0];
     for (let indice in palavras) {
       if (maiorPalavra.length < palavras[indice].length) {
         maiorPalavra = palavras[indice];
       }
     }
     return maiorPalavra;
   }
   
   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 

// function biggerName(array) {
//      let contador = 0;
//      let name = array[0];

//      for (let index in array) {
//           if (name.lenght < array[index].lenght);
//           name = array[index];
//      }
// return name;
// }
// console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// function returnName(array) {
// let name  = array[0];

//  for (let index = 0; index < array.length - 1; index += 1) {
//     if (array[index].length > array[0].length) {
//           name = array[index];
//      } 
//   }
// return name;
// }


// console.log(returnName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
