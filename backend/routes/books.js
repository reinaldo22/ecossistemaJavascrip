const express = require('express');
const rota = express.Router();
const Book = require("../models/Books");
const {unlink} = require("fs-extra");
const path = require("path");



rota.get("/", async (req, res)=>{
    const Books = await Book.find();
    res.json(Books);    
 });

rota.post('/', async(req, res)=>{
    
    const {title, autor, isbn} = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const novoLivro = new Book({title,autor,isbn, imagePath})
    await novoLivro.save()
    res.json({message: "Livro salvo com sucesso!"});
});

rota.delete("/:id", async (req, res)=>{
    const book = await Book.findByIdAndDelete(req.params.id);
    unlink(path.resolve('./backend/public' + book.imagePath ))
    res.json({message: "DELETADO COM SUCESSO!" });
});



module.exports = rota;