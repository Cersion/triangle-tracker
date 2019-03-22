function  tracker(){
  /*USER INTERFACE LOGIC*/

  var collect1=document.getElementById("sideA").value;
  var collect2=document.getElementById("sideB").value;
  var collect3=document.getElementById("sideC").value;
  var sideA=parseInt(collect1);
  var sideB=parseInt(collect2);
  var sideC=parseInt(collect3);
  var sides=[sidea,sideb,sidec];
var type=["makes an equilateral triangle","makes an isosceles triangle","makes a scalene triangle","doesn't make a triangle"]

  if(sides[0] <=0 || sides[1] <=0 || sides[2] <=0){
    var firstOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[3];
    document.getElementById("trackOutput").innerHTML=firstOutput;
  }
  else if(sides[0]===sides[1] && sides[1]===sides[2] && sides[2]===sides[0]){
    var secondOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[0];
    document.getElementById("trackOutput").innerHTML=secondOutput;
  }
  else if(sides[0]===sides[1] || sides[0]===sides[2] || sides[1]===sides[2]){
    var thirdOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[1];
    document.getElementById("trackOutput").innerHTML=thirdOutput;
  }
  else if(sides[0]!==sides[1] && sides[0]!==sides[2] && sides[2]!==sides[1] && sides[0]+sides[1]>sides[2] && sides[1]+sides[2]>sides[0] && sides[2]+sides[0]>sides[1]){
    var fourthOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[2];
    document.getElementById("trackOutput").innerHTML=fourthOutput;
  }
  else if(sides[0]+sides[1]<sides[2] || sides[1]+sides[2]<sides[0] && sides[2]+sides[0]<sides[1]){
    var fifthOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+type[3];
    document.getElementById("trackOutput").innerHTML=fifthOutput;
  }
  else {
    var sixthOutput=type[3];
    document.getElementById("trackOutput").innerHTML=sixthOutput;
  }
}
