const validator = {
isValid : function(){
  let input = document.getElementById("numeroTarjeta").value;
  let numbers = input.toString().split('').map(Number);
  let total = 0;
  let numPar = 0;
  
  if (input === ""){
      alert("Por favor ingresa un número")
  }
  else {
      for (i=0; i<numbers.length; i++){
          if ( i % 2 === 0) {
          numPar = numbers[i] * 2
              if ( numPar > 9 ){
              numPar = numPar.toString().split('').map(Number);
              total = total + numPar[0] + numPar[1];
              }
              else {
              total = total + numPar;
              }
          }
          else {
          total = total + numbers[i];
          }
      }
      console.log(total);

   if (total % 10 === 0){
      document.getElementById("show").innerText = "V Á L I D O";   
      }
   else {
      document.getElementById("show").innerText = "I N V Á L I D O";    
      }
    } 
  },
} 

export default validator.isValid();