const userModel = require("../model/userModel");
const slotModel = require("../model/slotModel");
const jwt = require("jsonwebtoken");
const  { isValidAge,isValidAadharNo,isValidName,isValidPassword,isValidObjectId, isValidMobile,isValidPincode} = require("../Validation/validation");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if(Object.keys(data).length==0) return res.status(400).send({status:false, msg:"please provide required data"})

    if(isValidName(data.Name)) return res.status(400).send({status:false, msg:"lastName should be in string "})
    if(isValidMobile(data.PhoneNumber)) return res.status(400).send({status:false, msg:"Phone Number should be in string "})
    if(isValidPincode(data.PinCode)) return res.status(400).send({status:false, msg:"PinCode should be in string "})
    if(isValidAge(data.Age)) return res.status(400).send({status:false, msg:"age should be in Number "})
    if (!isValidPassword(data.Password)) return res.status(400).send({status: false, msg: "Password should contain Minimum eight and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character", });
    if(isValidAadharNo(data.AadharNo)) return res.status(400).send({status:false, msg:"Adhar number  is not valid "})

    const userData=await userModel.findOne({AadharNo:AadharNo})
    if(userData) return res.status(400).send({ status: false, msg: "User is already registor" });
    

    const createUser = await userModel.create(data);
    return res.status(201).send({ status: true, msg: createUser });
  } catch (err) {
    return res.status(500).send({msg:err.message})
  }
};
const userLogIn = async (req, res) => {
  try {
    const data = req.body;

    const { PhoneNumber, Password } = data;
    if(!PhoneNumber||!Password) return res.status(400).send({status:false, msg:"please provide login data "})
    if(isValidMobile(data.PhoneNumber)) return res.status(400).send({status:false, msg:"Phone Number should be in string "})

    const user = await userModel.findOne({ PhoneNumber: PhoneNumber });
    if (!user) return res.status(404).send({ status: false, message: "user is not registor" });

    if (user.Password!=Password)return res.status(400).send({ message: "Invalid password" });

    let token = jwt.sign(
      {
        userId: user.PhoneNumber.toString(),
      },
      "covide-2023", { expiresIn: "24h" }
    );
    return res.status(200).send({
      status: true, message: "User login successfully", token: token});
  }
   catch (err) {
    return res.status(500).send({msg:err.message})
  }
};
const UpdateUser = async function (req, res) {
  try {
    const data = req.body;
    const userId = req.params.userId;

    if(!isValidObjectId(userId))return res.status(400).send({status:false, msg:"user id is not valid"})

     
    const user = await userModel.slotModel({"slots.users":userId}); 
    if(!user){ return res.status(404).send({status:false, msg:"user Not found"})}

    let timestamp = new Date().getTime();
    const getTime = timestamp - user.createdAt.getTime();
    if (getTime / 1000 > 86400) {
      return res.status(400).send({
        status: false,
        msg: "can't update your profile after 24 hour",
      });
    }
    const updatedData = await slotModel.findOneAndUpdate(
      { _id:user._id },
      { $set:  {...data}  },
      { runValidators: true }
    );
    return res.status(200).send({ status: true, msg: updatedData });
  } catch (err) {
    return res.status(500).send({msg:err.message})
  }
};

module.exports = { createUser, UpdateUser, userLogIn };
