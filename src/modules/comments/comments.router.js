//import modules
import {Router} from 'express'
import {deletecomment,updatecomment,getComments,createcomment} from './comments.controller.js'
const commentRouter = Router()
//signup
commentRouter.post('/createcomment',createcomment)
commentRouter.get('/getcomment/:postId',getComments)
commentRouter.put('/updatecomment/:id',updatecomment)
commentRouter.delete('/deletecomment/:id',deletecomment)

export default commentRouter