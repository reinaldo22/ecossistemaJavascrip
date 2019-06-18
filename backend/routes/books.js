const express = require('express');
const rota = express.Router();
const Book = require("../models/Books");


rota.get("/", async (req, res)=>{
    const Books = await Book.find();
    res.json(Books);    
 });

rota.post("/", async(req, res)=>{
    
    const {title, autor, isbn} = req.body;
    const novoLivro = new Book({title,autor,isbn})
    await novoLivro.save()
    res.json({message: "Livro salvo com sucesso!"});
});

rota.delete("/:id", async (req, res)=>{
    const book = await Book.findByIdAndDelete(req.params.id);
    console.log(book);
    res.send("Deletado com sucesso!");
});



module.exports = rota;