const con=require('../config');

const uploadImage=async function(req,res){
//res.send("image uploaded");
try{

    let image=req.body.image;
    let result =await con.query("insert into post ?",image,function(err,rows){
        if(err){
            res.send({
                mess:"err",err
            })
        }else{
            res.send({msg:"uploda"})
        }
    })
}catch(err){

}}
//----display image

const display=async function(req,res,next){
    try {
        var db=req.con;
        let result=db.query("select * form users",function(err,rows){
            if(err){
                console.log("error")
            }else {
                res.send({message:result})
            }
        })
    }catch(err){
        res.send({err:err.message})
    }
}
module.exports={uploadImage,display}