
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
        console.log(data);
    }
         
     //Deletar pelo id
   async deleteBook(bookId) {
        const res = await fetch(`${this.API}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data);
    }

}
export default  BookService;