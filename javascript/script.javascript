function  tracker(){
  /*USER INTERFACE LOGIC*/

  var collect1=document.getElementById("sideA").value;
  var collect2=document.getElementById("sideB").value;
  var collect3=document.getElementById("sideC").value;
  var sidea=parseInt(collect1);
  var sideb=parseInt(collect2);
  var sidec=parseInt(collect3);
  var sides=[sidea,sideb,sidec];
var type=["makes an equilateral triangle","makes an isosceles triangle","makes a scalene triangle","doesn't make a triangle"]
