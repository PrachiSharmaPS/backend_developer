//const userModel = require("../model/userModel");

const createRound = async function (req, res) {
  try {
    let data = req.body;
    if(Object.keys(data).length==0) return res.status(400).send({status:false, msg:"please provide required data"})

    if(isValidName(data.Name)) return res.status(400).send({status:false, msg:"lastName should be in string "})
    
    const userData=await userModel.findOne({AadharNo:AadharNo})
    if(userData) return res.status(400).send({ status: false, msg: "User is already registor" });
    
    return res.status(201).send({ status: true, msg: createUser });
  } catch (err) {
    return res.status(500).send({msg:err.message})
  }
};
module.exports = { createRound };
