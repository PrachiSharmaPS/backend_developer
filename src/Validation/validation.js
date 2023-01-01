const mongoose = require("mongoose");

//<--------------------------------- Validations : Name 

const isValidName = function (name) {
  const fnameRegex = /^([a-zA-Z])+$/;
  return fnameRegex.test(name);
};

//<--------------------------------- Validations : Password  

const isValidPassword = function (password) {
  const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  return passwordRegex.test(password);
};
//<--------------------------------- Validations : Mobile  

const isValidMobile = function (mobile) {
  const MobileRegex =
  /^[0]?[6789]\d{9}$/;
  return MobileRegex.test(mobile);
};
//<---------------------------------Validations :  ObjectId 

const isValidObjectId = function (objectId) {
  return mongoose.Types.ObjectId.isValid(objectId);
};
//<--------------------------------- Validations :  PinCode
const isValidPincode = function (pincode) {
  const PinCodeRegex =
  /^[1-9]{1}[0-9]{5}$/;;
  return PinCodeRegex.test(pincode);
};

//<---------------------------------Validations :  AdhR NUMBER
const isValidAadharNo = function (AadharNo) {
  const TitleRegex =/^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/;
  return TitleRegex.test(AadharNo);
};
//<---------------------------------Validations : Age
const isValidAge = function (age) {
  const TitleRegex =
  /^([1-9])$/;
  return TitleRegex.test(age);
};

module.exports = {isValidAge,isValidAadharNo,isValidName,isValidPassword,isValidObjectId, isValidMobile,isValidPincode};