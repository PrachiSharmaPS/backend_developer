const mysql=require("mysql")

const con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test_db"
    });

    con.connect((err)=>{
        if(err){
            console.warn(err.message)
        }
        else{console.warn("connected")
    }
    con.query("select *from user ",(err,result)=>{
        console.warn("connected")
    })

    })
    module.exports=con;