let aprendizado = Number(prompt("Digite um numero para descobrir o que você aprendeu?"))

function seSenao() {
    let perguntaUsuario = prompt('Você estudou no feriado? Sim ou Não')

        if(perguntaUsuario.toLocaleLowerCase() == "sim"){
            alert("Parabens você é o cara!")
        }else{
            alert("Miguelou")
        }
}

function criarFuncao() {

    function teste() {
        alert("Teste")
    }
    teste()
}

function soma(primeiroNumero, SegundoNumero) {
    return primeiroNumero + SegundoNumero
}
function perguntaNumeros() {
    let primeiroNumero = Number(prompt("Digite o Primeiro Numero"))
    let SegundoNumero = Number(prompt("Digite o segundo Numero"))

    alert(soma(primeiroNumero, SegundoNumero))
}   

switch (aprendizado) {
    case 1:
        seSenao()
        break;
    case 2:
        criarFuncao()
        break;
    case 3:
        perguntaNumeros()
        alert(perguntaNumeros())
        break;
    default:
        alert("Não existe esse caso")
        break;
}