
const text =document.createElement("p");
function seufuturo(){
let min = Math.ceil(1);
let max = Math.floor(4);
let resposta= Math.floor(Math.random() * (max - min + 1)) + min;

document.body.appendChild(text);
switch(resposta){

case 1:
 
    text.innerHTML= "A resposta é sim"
break;

case 2:

text.innerHTML= "A resposta é não"

    
break;

case 3:
    text.innerHTML= "A resposta é talvez"
break;

case 4:
    contrato()
break;

}
}
function contrato(){
  
  let value=window.prompt("digite o seu nome: (mesmo que voce so digite seu primeiro nome saberemos quem é e onde mora...) ");
  value.split('');
  if(value.length>=3)
  return  alert("voce acaba de vender a sua alma por 50 centavos");
  else{ 
    alert("voce não escreveu o seu nome");
    contrato();
    }
}