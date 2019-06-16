const express = require('express');
const rota = express.Router();

rota.get("/", (req, res)=>{res.json({ text:'Ola mundinho'}) });


module.exports = rota;