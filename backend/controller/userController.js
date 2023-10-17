const USER = require("../model/userSchema")
const PRODUCTS = require("../model/productSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const SecretKey = "SecretKey"
const SaltRound = 10;



const register = async(req,res)=>{
    try{
        const {username , email , password , confirmpassword} = req.body;
        if(password !== confirmpassword){
            return res.status(200).send({msg : "Password is not mached"})
        }

        // Checked if the email is already in use 
        const existingUser = await USER.findOne({email});
        if(existingUser){
            return res.status(200).send({msg : "Email already registered"})
        }

        // Hash password 
        const hashedPassword = await bcrypt.hash(password, SaltRound);
        const hashConfirmPassword = await bcrypt.hash(confirmpassword, SaltRound);

        // create user
        const user = await USER.create({
            username : username,
            email: email,
            password : hashedPassword,
            confirmpassword : hashConfirmPassword
        });

        console.log(user);
        res.status(200).send({msg : "user registered successfully", user : user});
    }
    catch(err){
        console.log(`Error is creating user :- ${err.message}`);
        res.status(500).send({msg : err.message})
    }
}

const login = async (req, res) => {
    try{
        let {email, password} = req.body

        const login = await USER.findOne({email: email});

        if(!login) {
            return res.status(200).send({msg : "User is not Found"});
        }
        if((await bcrypt.compare(password, login.password)) == false){
            return res.status(200).send({msg : "Password is incorrect"});
        }
        // genrate token
        const token = jwt.sign({_id :login._id}, SecretKey , {expiresIn : "24h"});
        const loginemail = login.email;
        const loginpass = login.password;

        res.status(200).send({user : [loginemail, loginpass], token : token, userid : login._id})

    }
    catch(err){
        res.status(500).send({msg : err.message});
    }
}



const dashboard = (req, res)=>{
    return res.send({
        result : "My name is Nitin and You are Verify"
    })
}


const searchproduct = async(req, res)=>{
    try{
        const search = req.body.search;
        console.log(search);

        const searching = await PRODUCTS.find({
            Name : {$regex : new RegExp(search , "i")}, // "i" for case-insensitive search
        });
        if(searching.length > 0){
            return res.status(200).json({success : true, msg : "Products Details", data : searching});
        }else{
            return res.status(404).json({msg : "No matching products found"});
        }
    }
    catch(err){
        console.log(err.message);
        return res.status(500).json({msg : "Internal Server Error" , error : err.message});
    }
}









module.exports = {register , login , dashboard , searchproduct}