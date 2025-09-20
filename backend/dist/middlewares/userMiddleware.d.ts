import type { Request, NextFunction, Response } from "express";
declare function userMiddleware(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export default userMiddleware;
//# sourceMappingURL=userMiddleware.d.ts.map