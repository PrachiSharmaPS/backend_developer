const { isValidObjectId } = require('mongoose')
const taskModel = require('../models/taskModel')

//----------------------//Create-Task//----------------------//

const createTask = async  function(req,res){
    try{
  
      const data = req.body

      if(Object.keys(data).length == 0 ){
        return res.status(400).send({status:false,message:"Please Provide Mandatory Field"})
      }

      let{Title,Description} = data

      if(!Title) return  res.status(400).send({status:false,message:"Please Provide Title"})
     
      if(!Description)return  res.status(400).send({status:false,message:"Please Provide Description"})

      
      const saveData = await taskModel.create({
        Title:Title,
        Description:Description,
        Status:"Open"
      })

      return res.status(201).send({status:true,message:"Task Created",data:saveData})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}
//..................................Get-Task...............................

const getTask = async  function(req,res){
    try{
  
     const data = req.params.taskId
        if(!data) return res.status(400).send({status:false,message:"Please Provide TaskId"})
        if(!isValidObjectId(data)) return res.status(400).send({status:false,message:"TaskId is not Valid"})

        const findTask = await taskModel.findOne({_id:data,isDeleted:false})
        if(!findTask){
            return res.status(404).send({status:false,message:"The Task with this Id not Found"})
        }

        return res.status(400).send({status:true,message:"Task Details",data:findTask})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}
//..................................Update-Task...............................

const editTask = async  function(req,res){
    try{

        const task = req.params.taskId
        if(!task) return res.status(400).send({status:false,message:"Please Provide TaskId"})
        if(!isValidObjectId(task)) return res.status(400).send({status:false,message:"TaskId is not Valid"})

        const findTask = await taskModel.findOne({_id:task,isDeleted:false})
        if(!findTask){
            return res.status(404).send({status:false,message:"The Task with this Id not Found"})
        }
  
      const data =  req.body
      if(Object.keys(task).length == 0 ){
        return res.status(400).send({status:false,message:"Please Provide Mandatory Field"})
      }
      let{Title,Description,Status} = task
        
      let updateQuery={}

      if(Title){
        updateQuery.Title=Title
      }
      if(Description){
        updateQuery.Description=Description
      }
      if(Status){
           if(Status !="Open" && Status !="In-Progress" && Status !="Completed"){
            return res.status(400).send({status:false,message:"Status is Only Accepted in Open,In-Progress and Completed"})
            }
          
        updateQuery.Status=Status
      }

       const updateData = await taskModel.findOneAndUpdate({_id:task},{$set:{updateQuery}},{new:true})

       return res.status(200).send({status:false,message:"Update Successfull",data:updateData})


    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}
//..................................Delete-Task...............................

const deleteTask = async  function(req,res){
    try{
  
     const data = req.params.taskId
        if(!data) return res.status(400).send({status:false,message:"Please Provide TaskId"})
        if(!isValidObjectId(data)) return res.status(400).send({status:false,message:"TaskId is not Valid"})

        const findTask = await taskModel.findOne({_id:data,isDeleted:false})
        if(!findTask){
            return res.status(404).send({status:false,message:"The Task with this Id not Found"})
        }
        
        const deleteData = await taskModel.findOneAndUpdate({_id:data},{$set:{isDeleted:true,deletedAt:new Date()}},{new:true})


     return res.status(200).send({status:false,message:"Task Deleted Successfully"})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

module.exports={createTask,getTask,editTask,deleteTask}