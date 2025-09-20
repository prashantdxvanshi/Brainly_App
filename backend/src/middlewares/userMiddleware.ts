import jwt, { type JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "../routes/config.js";
import type { Request,NextFunction,Response } from "express";
function userMiddleware(req: Request,res: Response,next: NextFunction){
    const token=req.headers.token;
    const verify=jwt.verify(token as string,JWT_SECRET)
    if(!verify){
        return res.json({
            message:"you are not authorized"
        })
    }
    req.userId=(verify as JwtPayload).id
      next();
   
}
export default userMiddleware;