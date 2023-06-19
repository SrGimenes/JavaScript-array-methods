let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosAPI()

//Função assíncrona "Espere por uma promessa"
async function getBuscarLivrosAPI() {
    const res = await fetch(endpointAPI)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosDesconto)
}




//Como funciona um map
// const array1 = [1, 2, 3, 4];

// const map1 = array1.map(x => x * 10);

// console.log(map1);
// console.log(array1);