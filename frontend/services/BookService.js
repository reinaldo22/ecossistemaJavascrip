
//Criando uma conexão com o meu backend (api)
class BookService{

    constructor(){
        this.API = 'http://localhost:4000/api/books';
    }

    //pegar livros
    async getBook(){
        const response = await fetch(this.API);
        
        const books = await response.json();

        return books;
    }

    //Inserir Livros
    async postBook(book) {
        const res = await fetch(this.API, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
    }
         
     //Deletar pelo id
    async deleteBook(bookId){
           const response = await fetch(`${this.API}/${bookId}`, {
                headers:{
                    'Content-type':'application/json'
                },
                method: 'DELETE'
            });
            await response.json();
    }


} 
module.exports = BookService;