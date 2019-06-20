require('dotenv').config();
console.log(process.env.NODE_ENV);


const express = require("express");
const morgan  = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");




//Inicializações
const app = express();
require('./database');

//Settings
app.set('porta',process.env.PORT || 3000);


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
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Rotas
app.use('/api/books', require('./routes/books'));

//arquivos staticos
app.use(express.static(path.join(__dirname, 'public')));




//Start on server
app.listen(app.get('porta'), ()=>{

    console.log("Servidor na porta ", app.get('porta'));
    
});