import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { userModel } from "./db.js";
import userRoutes from "./routes/user.js";
import contentRoutes from "./routes/content.js";
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
app.use("/user", userRoutes);
app.use("/content", contentRoutes);
app.listen(port, async () => {
    try {
        await mongoose.connect(String(process.env.MONGODB_URL));
        console.log("you are connected to cluster successfully");
    }
    catch (err) {
        console.log("error in db connection is ", err);
    }
    console.log("server is started at port ", port);
});
//# sourceMappingURL=index.js.map