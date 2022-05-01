const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./config/db')
const PORT = 3001


app.use(express.json())
app.use(cors())

//                  Login           

app.post('/login',(req,res)=>{
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE email=? AND password =?",[email,password],
        (err,result)=>{
            if(err)console.log(err)

            if(result.length==0){
                res.send({message:'Incorrect Username or Password'})
            }else{
                res.send(result)
            }
        }
    )
})


//                  Register        

app.post('/register',(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const userType = req.body.userType
    const cls = req.body.cls
    const sec = req.body.sec

    db.query(
        "SELECT * FROM users WHERE email=?",[email],
        (err,result)=>{
            if(err)console.log(err)

            if(result.length==0){
                db.query(
                    "INSERT INTO users (username,email,password,user_type,class,section) VALUES (?,?,?,?,?,?) ",[username,email,password,userType,cls,sec],
                    (err,result1)=>{
                        if(err)console.log(err);

                        res.send('Registered');
                    }
                )
            }else{
                res.send('Email Is Already Taken')
            }
        }
    )

    
})

//      Listening to Port.....
app.listen(PORT,(err)=>{
    if(err)console.log(err)    

    console.log('server is running at 3001')
})