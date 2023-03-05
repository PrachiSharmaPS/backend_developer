const jwt = require("jsonwebtoken");
const { ValidObjectId } = require("../Validation/validation");
//<-------------------------------------Authentication ------------------------------------->//
const UserAuthentication = function (req, res, next) {
  try {
    
    const Bearer = req.headers["authorization"]

    if (!Bearer) {
      return res.status(400).send({ status: false, message: "token must be present" })
  }
  else {
    const token = Bearer.split(" ")
    if (token[0] !== "Bearer") {
        return res.status(400).send({ status: false, message: "Select Bearer Token in headers" })
    }
    jwt.verify(token[1], "covide-2023", function (err, decodedToken) {

        if (err) {
            if (err.message == "invalid token" || err.message == "invalid signature") {
                return res.status(401).send({ status: false, message: "Token in not valid" })
            }
            if (err.message == "jwt expired") {
                return res.status(401).send({ status: false, message: "Token has been expired" })
            }
            return res.status(401).send({ status: false, message: err.message })
        }
        else {
            req.loginUserId = decodedToken.userId       
            next()
        }
    })
}
}
catch (error) {
return res.status(500).send({ status: false, message: error.message })
}}

//<------------------------------------- Authorization ------------------------------------->//
const UserAuthorization = async (req, res, next) => {
  try {
    let userId = req.params.userId;
    let userIdfromToken = req.loginUserId

    if (!ValidObjectId(userId))
      return res.status(400) .send({status: false,message: "Please enter vaild User id " });

    let findUser = await userModel.findOne({ _id: userId });
    if (!findUser) {
      return res.status(404).send({ status: false, message: "User not found" });
    }
    console.log(findUser.PhoneNumber, userIdfromToken);
    if (findUser.PhoneNumber !== userIdfromToken) {
      res.status(403).send({ status: false, message: "unauthorize" });
    } else {
      next();
    }
  } catch (err) {
    return res.status(500).send({msg:err.message})
  }
};

module.exports = { UserAuthentication, UserAuthorization };
