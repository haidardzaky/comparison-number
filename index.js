//function for comparison
function compare(){
  num1 = Number(document.getElementById("angka1").value);
  num2 = Math.floor(Math.random()*(10));
  if(num1>num2){
    document.getElementById("result").innerHTML = num1+" bigger than "+num2;
  } else if (num1<num2){
    document.getElementById("result").innerHTML = num1+" smaller than "+num2;
  } else {
    document.getElementById("result").innerHTML = "Both has same value";
  }

}

//getting button class
var button1 = document.getElementById("submit");

//callback while clicking button
button1.addEventListener("click", compare);
