const divListaFilme = document.querySelector ("#lista_filmes")
const btnTerror = document.querySelector("#btn_terror")

function filtrarFilmesTerror() {
    const filmesTerror = filmes.filter((filmes) => {
        return filmes.genero === "terror"
    })  
}

btnTerror.addEventListener("click", filtrarFilmesTerror)

const filmes = [
]

/*filmes.forEach((filmes) =>{
    divListaFilme.innerHTML += <li><b>${File.titulo}</b> <br> ${filmes.sinopse}</br> Gênero: <i>${filmes.genero}</i></li>
}) quer um arrey com 10 objetos de filmes com propriedades genero sinopse titulo e quero 10 de cada titulo*/