const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const slotSchema = new mongoose.Schema(
    {
        slots : [{
            slotsTime : { type : String},
            users : [{ 
                type : ObjectId ,
                 ref : "userModel"
                }],
            slotsBooked : {
                 type : Number ,
                  default : 0
                }
    }],   
        Date : {
            type : Date,
            require :true, 
        },
        Hospital : {
            type : String,
            require :true,
        },
        PinCode : {
            type : Number,
            require : true,
        },
     
    }
)
module.exports = mongoose.model("slot",slotSchema)