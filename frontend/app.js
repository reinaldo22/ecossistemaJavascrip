import './styles/app.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks();
});

//Pegando informações dos id's la do formulario html
document.getElementById('book-form')
    .addEventListener('submit', e => {

        const title = document.getElementById('title').value;
        const autor = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        const image = document.getElementById('image').files;

        //Pega informações que serão enviadas por meio de parametros, postBook(book), deleBook(bookId)
        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('autor', autor);
        formData.append('title', title);
        formData.append('isbn', isbn);

        const ui = new UI();
        ui.addANewBook(formData);

        //console.log(title, autor, isbn, image)

        e.preventDefault();

    });

document.getElementById('books-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });