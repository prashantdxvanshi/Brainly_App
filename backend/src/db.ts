import mongoose, {model, Schema} from "mongoose";

const userSchema=new Schema({
    username: {type: String, unique: true},
    password: String
})
const tagSchema=new Schema({
    title:String
})
const contentSchema=new Schema({
    title:String,
    link:String,
    type:String,
    tags:[{type: mongoose.Types.ObjectId, ref: 'tag'}],
    userId:{type: mongoose.Types.ObjectId, ref: 'user', required: true}
    
})

const linkSchema=new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId,ref:"user",require:true,unique: true },
})


export const userModel=mongoose.model("user",userSchema)
export const tagModel=mongoose.model("tag",tagSchema)
export const contentModel=mongoose.model("content",contentSchema)
export const linkModel=mongoose.model("link",linkSchema)



