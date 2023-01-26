const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true
        },
    Description: String,
    Status:{
        type:String,
        enum:["Open", "In-Progress", "Completed"]
    },
    isDeleted:{
      type:Boolean,
      default:false

    },
    deletedAt:{
        type:Date
    }
    
},{timestamps:true})

module.exports = mongoose.model("Tasks",taskSchema)