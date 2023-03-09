const express=require('express')
const router=express.Router();
const {uploadImage,display}=require('../controller/postController');
const multer=require('multer');
//=========
const storage=multer.diskStorage({
    destination:'./image',
    filename:(req,file,cb)=>{
        console.log(file)
     return   cb(null,Date.now()+path.extname(file.originalname))
    },
})
const upload=multer({storage:storage})
router.post("/upload", upload.single('profile'),uploadImage);

router.get("/upload",display)
module.exports=router