const express=require('express');
const mongoose = require('mongoose');
//const multer = require('multer')
const route = require('./router/routes');
const app=express();

//app.use(multer().any())
app.use(express.json());

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/backend", {
    useNewUrlParser: true,
}).then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route);
let PORT=3000
app.listen(PORT, () => console.log(`Happy new year ${PORT}`));
