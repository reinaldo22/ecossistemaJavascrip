const express = require("express")

//Inicializações
const app = express();

//Settings
app.set('porta', 3000);

//Start on server
app.listen(app.get('porta'), ()=>{

    console.log("Servidor na porta ", app.get('porta'));
    
});