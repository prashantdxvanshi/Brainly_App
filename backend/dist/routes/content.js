import { Router } from "express";
import userMiddleware from "../middlewares/userMiddleware.js";
import { contentModel, linkModel, userModel } from "../db.js";
import { random as ran } from "../utils.js";
const contentRoutes = Router();
contentRoutes.post("/add", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const { link, type, title } = req.body;
    console.log(title, link, type);
    try {
        const content = await contentModel.create({
            title,
            link,
            type,
            tags: [],
            userId
        });
        res.json({
            message: "content added",
            content
        });
    }
    catch (err) {
        res.json({
            message: "content not added yet"
        });
    }
});
contentRoutes.get("/get", userMiddleware, async (req, res) => {
    const userId = req.userId;
    try {
        const content = await contentModel.find({ userId: userId }).populate("userId", "username");
        if (!content) {
            return res.json({
                message: "you have no content "
            });
        }
        res.json({
            message: "this is your content",
            content
        });
    }
    catch (err) {
        console.log("error is ", err);
        res.json({
            message: "something went wrong",
        });
    }
});
contentRoutes.delete("/delete", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const contentId = req.body;
    try {
        await contentModel.deleteMany({
            contentId, userId
        });
        res.json({
            message: "Deleted"
        });
    }
    catch (err) {
        res.json({
            message: "something went wrong"
        });
    }
});
contentRoutes.post("/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await linkModel.findOne({
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            });
            return;
        }
        const hash = ran(10);
        await linkModel.create({
            userId: req.userId,
            hash: hash
        });
        res.json({
            hash
        });
    }
    else {
        await linkModel.deleteOne({
            userId: req.userId
        });
        res.json({
            message: "Removed link"
        });
    }
});
contentRoutes.get("/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    console.log(hash);
    const link = await linkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        });
        return;
    }
    // userId
    const content = await contentModel.find({
        userId: link.userId
    });
    console.log(link);
    const user = await userModel.findOne({
        _id: link.userId
    });
    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        });
        return;
    }
    res.json({
        username: user.username,
        content: content
    });
});
export default contentRoutes;
function random(arg0) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=content.js.map