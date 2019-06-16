const express = require("express");
const morgan  = require("morgan");
const multer = require("multer");
const path = require("path");

//Inicializações
const app = express();


//Settings
app.set('porta', 3000);


//midleware morgan, multer, urlencoded
//1 - morgan para saber as requisições que vem do frontend
app.use(morgan('dev'));

//2 - imagens  
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime()+ path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));
//Start on server
app.listen(app.get('porta'), ()=>{

    console.log("Servidor na porta ", app.get('porta'));
    
});