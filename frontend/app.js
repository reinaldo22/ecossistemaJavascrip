import './styles/app.css';
import BookService from './services/BookService';

//Pegando informações dos id's la do formulario html
document.getElementById('book-form')
    .addEventListener('submit', e  =>{
        
        const title = document.getElementById('title').value;
        const autor = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        
        const image = document.getElementById('image').files;

        //Pega informações que serão enviadas por meio de parametros, postBook(book), deleBook(bookId)
        const formData = new FormData();
        formData.append('image',image[0]);
        formData.append('autor', autor);
        formData.append('title', title);
        formData.append('isbn', isbn);

        //instancio o serviços aqui
        const bookService  = new BookService();
        bookService.postBook(formData);

        //console.log(title, autor, isbn, image)

        e.preventDefault();

    });