const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/javascripdb', {
    
    useNewUrlParser : true

}).then(db => console.log('conectado ao banco de dados')).catch(err => console.log(err));