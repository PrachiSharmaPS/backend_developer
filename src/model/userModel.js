const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        Name : {
            type : String,
            required :  true,
            trim : true,
          
        },
        PhoneNumber : {
            type : String,
            required :true ,
            trim : true,
          
        },
        Age : {
            type : Number,
            required : true ,
            trim : true,
        },
        AadharNo : {
            type : Number,
            required :true ,
            unique : true,
        },
        Password : {
            type : String,
            required :true , 
        },
        PinCode : {
            type : Number,
            required : true ,
            trim : true,
        },
        VaccineStatus :{
            type : String,
            default: "pending",
            enum: ["pending", "completed"],
        },
        FirstDose : {
            type: String,
            default : "pending",
            enum:  ["pending", "completed"],
        },
        SecondDose :{
            type: String,
            default: "pending",
            enum:  ["pending", "completed"],
        },
      
       
    }, { timestamps: true }
)
module.exports = mongoose.model("userModel",UserSchema)

