const btnFiltrarLivrosDeFront = document.getElementById("btnFiltrarLivrosFront");

btnFiltrarLivrosDeFront.addEventListener('click', bookFilter);

function bookFilter(livros)
{
    let filteredBooks = livros.filter(livro => livro.categoria == 'front-end');
    console.table(filteredBooks);
}