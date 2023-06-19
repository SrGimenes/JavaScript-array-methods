function aplicarDesconto(livros)
{
    const desconto = 0.3
    livrosDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // "..." faz uma cópia de todo o array ou objeto
    })
    return livrosDesconto;
}