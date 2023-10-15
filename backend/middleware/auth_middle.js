const jwt = require("jsonwebtoken");
const SecretKey = "SecretKey"

const userAuth = async (req,res,next)=>{
    try{
        const bearer = req.headers["authorization"];

        if(bearer === undefined){
            return res.status(401).json({msg : "No Token"});
        }

        const token = bearer.split(" ")[1];

        if(token === undefined){
            return res.status(401).json({msg : "User not Authenticated or Session Expired"});
        }
        const verify = jwt.verify(token, SecretKey);
        if(verify){
            return next();
        }
        return res.status(401).send({msg : "not Authorized for The Particular resource"});
    }
    catch(err){
        return res.status(401).json({msg : "JWT Verification Failed", error : err.message});
    }
}

module.exports = userAuth;