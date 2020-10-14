const estados =["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];


const select = document.getElementById("select-state");
for (let i in estados) {
    const option = document.createElement("option");
    option.innerHTML = estados[i];
    select.appendChild(option);
}

function treatDay(day) {
  const formatedDay = Number(day.join(""));
  if (formatedDay < 0 && formatedDay > 31) {
      return "formato de dia incorreto";
  } 
}

function treatMonth(month) {
    const formatedMonth = Number(month.join(""));
    if (formatedMonth < 0 && formatedMonth > 12) {
        return "formato de dia incorreto";
    } 
  }

  function treatMonth(month) {
    const formatedMonth = Number(month.join(""));
    if (formatedMonth < 0 && formatedMonth > 12) {
        return "formato de dia incorreto";
    } 
  }

function formatDate () {
let dia, mes, ano = [];

for (let i in date) {
    if(i < 2) {
    Number
    } else if {

    } else if {

    }
}
}

const date = document.getElementById("initial-data").value;




