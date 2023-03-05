const express = require("express");
const router = express.Router()
const {createUser ,UpdateUser,userLogIn} = require('../controller/usercontroller')
const { UserAuthentication, UserAuthorization } = require('../middleware/userAuthentication')
 
router.post("/register", createUser)
router.put('/user/:userId/profile',UserAuthentication,UserAuthorization,UpdateUser)
router.get('/logIn',userLogIn)



module.exports = router;