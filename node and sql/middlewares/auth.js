const jwt=require('jsonwebtoken');
const isLogin=async(req,res,next)=>{
    try {
        if(req.session.user_id){
            let token=req.headers.authorization;
            if(token){
                //token k first elemnt ko access karo
                token=token.split(" ")[1];
                let user=jwt.verify(token,process.env.SECRET_KEY);
                req.user_id=user
            }
            else{
                res.status(401).json({message:"Unauthorized user"})
            }
            
        }
        else{
            console.log("Not logged in");
            res.status(401).json({message:"Session is expired please login again"})
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({message:"Unauthorized user"})
    }
}

// const isLogout=async(req,res,next)=>{
//     try {
//         if(req.session.user_id){
//             console.log("you are logged in");
//         }
//         else{
//             console.log("Not logged in");
//         }
//     } catch (error) {
        
//     }
// }

module.exports={
    isLogin
}