//Exemplo com média escolar


var nota1 = 8.0;
var nota2 = 3.0;

var media = (nota1 + nota2) /2;

// if(media >= 7.0){
//     alert("Parabéns, passou de ano com média " + media + "!");
// } else{
//     alert("Sua nota " + media + " não foi suficiente para passar :(");
// }

var conceito;

if(media >= 8){
    conceito = "Ótimo!";

} else if(media >= 6){
    conceito = "Regular";

} else{
    conceito = "Péssimo, estude mais";
    
}
console.log(media);
console.log(conceito);