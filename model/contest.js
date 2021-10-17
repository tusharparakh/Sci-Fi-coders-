const mogoose = require('mongoose')
const Schema = mongoose.Schema
const contestSchema = new Schema({
    name: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    code:{type:String,required:true}
})
module.exports=Contest=mongoos.model('contest',contestSchema)