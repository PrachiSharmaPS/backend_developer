const express=require('express');
const con=require('./config');
const path=require('path');
const app=express();
//const multer=require('multer');
const routes=require('./routes/routes');

//======making accessible to route
app.use(function(req,res,next){
    req.con=con;
    next()
})
// const storage=multer.diskStorage({
//     destination:'./image',
//     filename:(req,file,cb)=>{
//         console.log(file)
//      return   cb(null,Date.now()+path.extname(file.originalname))
//     },
// })
// const upload=multer({storage:storage})

app.set("view engine","ejs")
app.use('/',routes)

// app.post("/upload", upload.single('profile'),uploadImage);

// app.get("/upload",display)
app.listen(3000)