//import modules
import {Router} from 'express'
import { signup,login,Logout} from './user.controller.js'
const userRouter = Router()
//signup
userRouter.post('/signup',signup)
userRouter.post('/login',login)
userRouter.post('/Logout',Logout)
export default userRouter