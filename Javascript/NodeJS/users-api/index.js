import express from "express";
import bodyParser from 'body-parser'
import userRouter from './routes/users.js'

const app = express();

app.use(bodyParser.json())

app.use('/', userRouter)

app.listen(4000, function () {

    console.log('Hey, server running on port');
})