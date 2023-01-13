const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization;
    
    jwt.verify(token,process.env.secreta,(err,decoded) => {
        if(err){
            console.log(err);
            res.sendStatus(401);
            return;
        }     
        req.user=decoded;
        next();

    });
}


module.exports=authMiddleware;


