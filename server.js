const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.get('/status', (req, res) => {
    res.json({status:"active"})
})
const port =process.env.PORT || 5000
app.listen(port,()=>{console.log('Server Started')})