var header = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h2 = document.querySelector("h2");

 function setGradient (){
        body.style.background= 
        "linear-gradient( to right, "
         + color1.value 
         + ", " 
         + color2.value 
         +")";

         CSS.textContent = body.style.background + ";";
 };
 color1.addEventListener("input", setGradient);
 color2.addEventListener("input", setGradient);
 document.getElementbyTagname("h2").innerHTML = color1.value;
 
