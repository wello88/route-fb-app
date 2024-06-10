//import modules
import express from 'express'
import {connectdb,sequelize} from'./db/connection.js'
import userRouter from './src/modules/user/user.router.js'
import commentRouter from './src/modules/comments/comments.router.js'
import postRouter from './src/modules/posts/posts.router.js'




//connectdb
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000
connectdb()


app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

// listen server
app.listen(port, ()=>
console.log('server is running on port',port)
)