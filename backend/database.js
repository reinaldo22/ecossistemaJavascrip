const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI, {
    
    useNewUrlParser : true

}).then(db => console.log('conectado ao banco de dados')).catch(err => console.log(err));
