function triangleTracker(){
  var sideA = parseFloat(document.getElementById("sideA").value);
  var sideB = parseFloat(document.getElementById("sideB").value);
  var sideC= parseFloat(document.getElementById("sideC").value);

  if(isNaN(sideA,sideB,sideC) === true ||  (sideA<=0 || sideB<=0 || sideC<=0)){
      output.innerHTML=("NOT A NUMBER!")
    }
    else if (sideA === sideB && sideB === sideC) {
     output.innerHTML=("Equilateral Triangle!")
    }
      else if (sideA === sideB || sideA === sideC || sideB === sideC ) {
         output.innerHTML=("Issoscles Triangle!")
    }
    else if ((sideA+sideB)<=sideC || (sideA+sideC)<=sideB || (sideB+sideC)<=sideA) {
     output.innerHTML=("NOT A TRIANGLE!")
    }
    else if (sideA !== sideB && sideB !== sideC ) {
       output.innerHTML=("Scalene Triangle!")
    }
}

function reset() {
  location.reload();
}
