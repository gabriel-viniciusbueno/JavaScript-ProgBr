// Objetos - Construtores

function criarAluno(name,n1,n2){
    return {
        nome: name,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) /2;
        }
    }
}

var turma = [
    criarAluno("gabruel", 9, 5),
    criarAluno("Lusca", 9, 10),
    criarAluno("matia", 2, 10),
    criarAluno("Maria", 5, 8),
    criarAluno("sara", 9, 8)
]

for(var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media());
}






// function calcMedia(){
//     return (this.nota1 + this.nota2) /2;
// }

// var turma =[
//     {
//         nome: "Jaime",
//         nota1: 7,
//         nota2: 9,
//         media: calcMedia
//     }
// ]

// var aluno = turma[0];
// console.log(aluno)
// console.log(aluno.media());