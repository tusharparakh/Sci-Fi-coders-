const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username:{type:String,required:true,unique:true},
    email: { type: String, required: true ,unique:true},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, default: false },
    isSupAdmin: { type: Boolean, default: false },
})
module.exports=User=mongoose.model('user',userSchema)