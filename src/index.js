import validator from './validator.js';

console.log(validator);


function mResultado(mostrar) {
    let result = document.getElementById(mostrar)
    let input = document.getElementById("numeroTarjeta").value;
        if(input === ""){
            result.style.display = "none"; 
        }
        else{result.style.display = "block";   
        }   
  };