let capsule = [];


const validator = {
isValid : ()=>{
        let label = document.getElementById("numeroTarjeta").value;
        let numbers = capsule;
        let total = 0;
        let numPar = 0;
        
        if (label === ""){
            alert("Por favor ingresa un número")
        }
        else {
            for (let i=0; i<numbers.length; i++){
                if ( i % 2 === 0) {
                numPar = (+numbers[i] * 2)
                    if (numPar > 9){
                    numPar = numPar.toString().split("").map(Number);
                    total = total + +numPar[0] + +numPar[1];
                    console.log(numPar);
                    }
                    else {
                    total = total + +numPar;
                    }
                }
                else {
                total = total + +numbers[i];
                }
            console.log(total);
            }
      
         if (total % 10 === 0){
            document.getElementById("show").innerText = "V Á L I D O";   
            }
         else {
            document.getElementById("show").innerText = "I N V Á L I D O";    
            }
          } 
          capsule = [];
        }, 


maskify: ()=> {
    let numbers = document.getElementById("numeroTarjeta").value;
    capsule.push(numbers[numbers.length-1]);
    numbers = numbers.split("");
    
    let hidden = [];
    for (let i=0; i<numbers.length; i++){

        if (i < numbers.length-4){
            hidden.push('#');
        }
        else {
            hidden.push(numbers[i]);
        }
    }
   document.getElementById("numeroTarjeta").value= hidden.join('');
  },

mResultado: (mostrar) =>{
    let input = document.getElementById("numeroTarjeta").value;
    let result = document.getElementById(mostrar)
        if(input === ""){
            result.style.display = "none"; 
        }
        else{result.style.display = "block";   
        }  

    }
};

export {capsule, validator};