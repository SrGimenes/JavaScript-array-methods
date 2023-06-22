function aplicarDesconto(livros)
{
    const desconto = 0.3
    livrosDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // "..." faz uma cópia de todo o array ou objeto
    })
    return livrosDesconto;
}

// const numeros = [2,4,6,8]
// function dobrarValor(numeros)
// {
//  const multiplicador = 2
//  valorDobrado = numeros.map(i => {
//     return {...i, i: i.i * (multiplicador)}
//  })
// }
// console.log(dobrarValor)