const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ratingSchema = new Schema({
    contest: { type: String, required: true },
    rate: { type: Number },
    user:{type:Schema.Types.ObjectId,ref='user'}
})
module.exports=Rating=mongoose.model('rating',ratingSchema)