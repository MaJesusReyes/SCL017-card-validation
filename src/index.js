import * as validator from './validator.js';


let botoncito = document.getElementById("boton");
    botoncito.addEventListener("click", ()=> {
    validator.validator.isValid()
}); 

    botoncito.addEventListener("click", ()=> {
    validator.validator.mResultado('resultado')
});

let label = document.getElementById("numeroTarjeta");
    label.addEventListener("keyup", ()=> {
    validator.validator.maskify()
});

console.log(validator.capsule);
console.log(validator.validator);