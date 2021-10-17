const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emial: { type: String, required: true },
    password: { type: String, required: true},
    isAdmin: { type: Boolean, default: false },
    isSupAdmin: { type: Boolean, default: false },
})
module.exports=User=mongoose.model('user',userSchema)