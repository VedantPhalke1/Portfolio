
const mongoose= require('mongoose')
const UserSchema =new mongoose.Schema({
    name:String,
    role:String,
    email:String
})
const UserModel = mongoose.model("users",UserSchema)
module.exports=UserModel