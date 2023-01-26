const express  = require('express')
const router = express.Router()

const taskcontroller = require('../controllers/taskController')


router.post('/createTask',taskcontroller.createTask)
router.get('/getTask/:taskId',taskcontroller.getTask)
router.put('/editTask/:taskId',taskcontroller.editTask)
router.delete('/deleteTask/:taskId',taskcontroller.deleteTask)




router.all('/*',function(req,res){
    return res.status(400).send("Invalid https request")
})



module.exports = router