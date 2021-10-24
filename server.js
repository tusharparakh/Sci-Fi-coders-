const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const mongoose=require('mongoose')
const userRoute=require('./route/user')
app.use(express.json())
app.use(cors())
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2cqlb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(res => {
        console.log("DB Connected")
    })
app.get('/status', (req, res) => {
    res.json({status:"active"})
})
app.use('/api',userRoute)
const port =process.env.PORT || 5000
app.listen(port,()=>{console.log('Server Started')})