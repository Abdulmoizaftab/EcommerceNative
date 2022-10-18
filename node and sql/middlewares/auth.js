const jwt=require('jsonwebtoken');
const isLogin=(req,res,next)=>{
    console.log('user',req.session.user_id);
    try {
        if(req.session.user_id){
            let token=req.headers.authorization;
            console.log("gfgfgfg",token);
            if(token){
                //token k first elemnt ko access karo
                token=token.split(" ")[1];
                let user=jwt.verify(token,process.env.SECRET_KEY);
                req.user_id=user
                next();
            }
            else{
                res.status(401).json({message:"Unauthorized user"})
            }
            
        }
        else{
            console.log("Not logged in");
            res.status(401).json({message:"Session is expired please login again"})
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({message:"Unauthorized user"})
    }
}

const isLogout=async(req,res,next)=>{
    try {
        if(!req.session.user_id){
            next()
        }
        else{
            res.status(200).send("You are logged in")
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    isLogin,
    isLogout
}