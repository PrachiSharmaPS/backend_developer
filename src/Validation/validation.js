
const mongoose = require("mongoose");

//<--------------------------------- Validations : Name 

const isValidName = function (name) {
  const fnameRegex = /^([a-zA-Z])+$/;
  return fnameRegex.test(name);
};

//<--------------------------------- Validations : Email  

const isValidEmailId = function (email) {
  const emailRegex =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
  return emailRegex.test(email);
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
//<--------------------------------- Validations : Value
const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value == "string" && value.trim().length === 0) return false;
  return true;
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
//<--------------------------------- Validations :  PinCode
const isValidTitle = function (title) {
  const TitleRegex =
  /^([a-zA-Z 0-9])+$/;
  return TitleRegex.test(title);
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

module.exports = {isValidAge,isValidAadharNo, isValid,isValidEmailId,isValidName,isValidPassword,isValidObjectId, isValidMobile,isValidPincode,isValidTitle
};