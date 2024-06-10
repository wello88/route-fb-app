//import modules
import {Router} from 'express'
import {createPost,getAllPosts,getsinglepost,updatepost,deletepost} from './posts.controller.js'
const postRouter = Router()
//signup
postRouter.post('/createpost',createPost)
postRouter.get('/',getAllPosts)
postRouter.get('/singlepost/:id',getsinglepost)
postRouter.put('/updatepost/:id',updatepost)
postRouter.delete('/deletepost/:id',deletepost)

export default postRouter