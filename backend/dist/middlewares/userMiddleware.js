import jwt, {} from "jsonwebtoken";
import { JWT_SECRET } from "../routes/config.js";
function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const verify = jwt.verify(token, JWT_SECRET);
    if (!verify) {
        return res.json({
            message: "you are not authorized"
        });
    }
    req.userId = verify.id;
    next();
}
export default userMiddleware;
//# sourceMappingURL=userMiddleware.js.map