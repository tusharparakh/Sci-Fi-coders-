const { Router } = require('express')
const userRoute = Router()
const {login,register}=require('../controller/user.controller')
userRoute.post('/login',login)
userRoute.post('/register',register)
module.exports=userRoute