const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => btn.addEventListener('click', bookFilter))

function bookFilter()
{
    const btnElement = document.getElementById(this.id)
    const category = btnElement.value
    let filteredBooks = category == 'disponivel' ?  livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == category)
    exibirOsLivrosNaTela(filteredBooks)
}