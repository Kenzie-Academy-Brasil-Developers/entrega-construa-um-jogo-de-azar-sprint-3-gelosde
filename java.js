
const text =document.createElement("p");
function seufuturo(){
let min = Math.ceil(1);
let max = Math.floor(4);
let resposta= Math.floor(Math.random() * (max - min + 1)) + min;

document.body.appendChild(text);

switch(resposta){

case 1:
 
    text.innerHTML= "a resposta é sim"
break;

case 2:

text.innerHTML= "a resposta é não"

    
break;

case 3:
    text.innerHTML= "a resposta é talvez"
break;

case 4:
    contrato()
break;

}
}
function contrato(){
    window.prompt("digite o seu nome: ");
  
  return  alert("voce acaba de vender a sua alma por 50 centavos");
}