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
// Connect MongoDB and start server
async function main() {
    try {
        await mongoose.connect(String(process.env.MONGODB_URL));
        console.log("you are connected to cluster successfully");
    }
    catch (err) {
        console.log("error in db connection is ", err);
    }
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
main();
//# sourceMappingURL=index.js.map