const express=require('express');
const mongoose = require('mongoose');
const route = require('./router/router');
const app=express();

app.use(express.json());

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://Avverma:Avverma95766@avverma.2g4orpk.mongodb.net/backend", {
    useNewUrlParser: true,
}).then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route);
let PORT=3000
app.listen(PORT, () => console.log(`server port is  ${PORT}`));
