const express  = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')

const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB ,{
    useNewUrlParser: true
}).then(() => console.log('MongoDB is Connected'))
    .catch((err) => console.log(err))
app.use(cors({"Access-Control-Allow-Origin": '*'}))
app.use("/", route);

app.listen( process.env.PORT || 3001, () => {
    console.log('Server running on port', (process.env.PORT || 3001));
})

