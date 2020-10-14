window.onload = function() {
var picker = new Pikaday({ 
    field: document.getElementById('datepicker'),
    onSelect: function(date) {
        console.log(date);
 }
});

const estados =["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];


const select = document.getElementById("select-state");
for (let i in estados) {
    const option = document.createElement("option");
    option.innerHTML = estados[i];
    select.appendChild(option);
}

new window.JustValidate('.form', {
    rules: {
       name: {
         required: true,
         name: true,
         minLength: 3,
         maxLength: 15 

       },
       email: {
         required: true,
         email: true
       },      
     },
     messages: {   
         email: {
         required: 'O campo é obrigatório',
         email: 'Não é válido'
         },  
         name: {
        required: 'O campo é obrigatório',
        minLength: "min 3 caracteres",
        maxLength: "max 15 caracteres"   
        }             
     },

    submitHandler: function (form, values) {
        console.log(form,value);
      
    }
  }
)
}