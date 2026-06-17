

let aluno = {
    nome: "Rafael",
    idade: 26,
    curso: "ADS",
    materias: ["UI/UX Design, Lógica de Programação", "Modelagem de Banco de Dados"],
    endereco: {
        cidade: "São Paulo",
        bairro: "Lapa",
        rua: "Dronsfield"
    }
}

aluno.idade = 27
aluno.status = true 
/*delete aluno.idade*/

console.log(aluno)
/*console.log(aluno.["nome"])*/

console.log(aluno.idade)
console.log(aluno.curso)
console.log(aluno.materias[1])
console.log(aluno.endereco.bairro,)