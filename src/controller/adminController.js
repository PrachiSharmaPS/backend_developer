// const userModel = require("../model/userModel");
// const adminModel = require("../model/adminModel");
// const jwt = require("jsonwebtoken");
// const slotModel = require('../model/slotModel')

// const userDetails = async (req, res) => {
//   try {
//     const adminId = req.params.adminId;
//     const Data = req.body;
//     let filter = {};
//     if(Data.Age) {
//       filter['Age'] = Data.Age
//     }
//     if(Data.PinCode){
//       filter['PinCode'] = Data.PinCode
//     }
//       if(Data.FirstDose) {
//       filter['FirstDose'] = Data.FirstDose
//     }
//     if(Data.VaccinationStatus){
//       filter['VaccinationStatus'] = Data.VaccinationStatus
//     }
//     const findUser = await userModel.find(filter);
//     if(findUser.length == 0 )
//     {
//       return res.status(400).send({ status : false , msg : "no data available with query"})
//     }
//     return res.status(200).send({ userDetails: findUser });
//   } catch (err) {
//     return res.status(500).send({msg:err.message})
//   }
// };
// const loginAdmin = async function (req, res) {
//   try {
//     let { phone } = req.body;

//     let findAdmin = await adminModel.findOne({ phone: phone });
//     if (!findAdmin)
//       return res
//         .status(400)
//         .send({ status: false, message: "Invalid Login Credential" });

//     let payload = { userId: findAdmin._id, iat: Date.now() };

//     let token = jwt.sign(payload, "key", { expiresIn: "24h" });

//     res.setHeader("authorization", token);
//     res
//       .status(200)
//       .send({
//         status: true,
//         message: "Admin login successfull",
//         data: { adminId: findAdmin._id, token },
//       });
//   } catch (error) {
//     return res.status(500).send({msg:err.message})
//   }
// };
// const updateAdmin = async function(req,res )
// {
//   try{
//     let adminId = req.params.adminId
//     let userId = req.params.userId
//     let data = req.body
//     let updateuser = await userModel.findOneAndUpdate( { userId : userId},{ $set : data})

//   }
//   catch(err)
//   {
//     return res.status(500).send({msg:err.message})
//   }
// }
// const slotDetails =async (req, res)=>{
//   try{
//   const adminId =req.params.adminId;
//   const data = req.body
//   let query = {}
//   if(!(data.Date)) return res.status(400).send({ status : false , msg : "please enter Date"})
//   query["Date"] = req.body.Date
//   if(data.PinCode)
//   {
//     query["PinCode"] = data.PinCode
//   }
//   if(data.Hospital)
//   {
//     query["Hospital"] = data.Hospital
//   }
//   const findUser =await slotModel.find(query)
//   return res.status(200).send({userDetails:findUser}); 
//   }
//   catch(err)
//   {
//     return res.status(500).send({msg:err.message})
//   }
// }
// module.exports = {userDetails, loginAdmin ,slotDetails,updateAdmin}