const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => btn.addEventListener('click', bookFilter))

function bookFilter()
{
    const btnElement = document.getElementById(this.id)
    const category = btnElement.value
    let filteredBooks = livros.filter(livro => livro.categoria == category)
    console.table(filteredBooks)
}