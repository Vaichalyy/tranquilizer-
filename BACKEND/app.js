// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

//Configure ENV file & require connection file
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

//Require Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');

//This method is use to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());



//Registration
app.post('/register',async(req,res)=>{
    try{
        //Get body or data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });
        // save method is use to create user or insert user
        // before saving or inserting, password will hash
        // because of hashing. After hash it'll save to db
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    } catch(error){
         res.status(400).send(error)
    }
})


app.get('/', (req, res)=> {
    res.send("Hello World");
})

//Login User
app.post('/login',async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        //Find user if exist
        const user = await Users.findOne({email : email});
        if(user){
            //Verify password
            const isMatch = await bcryptjs.compare(password,user.password);
            if(isMatch)
            {
                //Generate Token which define in User Schema
                const token = await user.generateToken();
                res.cookie("jwt",token,{
                    //Expires token in 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }
    }catch(error){
        res.status(400).send(error);
    }
})


//Message
app.post('/message',async(req,res)=>{
    try{
        //Get body or data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name : name,
            email : email,
            message : message
        });
        
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");
    } catch(error){
         res.status(400).send(error);
    }
})

//Logout Page
app.get('/logout',(req,res)=>{
    res.clearCookie("jwt",{path : '/'})
    res.status(200).send("User Logged Out")
})

// Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})