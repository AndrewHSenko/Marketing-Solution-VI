import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js'

dotenv.config();

const app = express();

import authRouter from './routes/auth.js'

import notFound from './middleware/not_found.js'
import errorHandlerMiddleware from './middleware/error_handler.js';'./middleware/error_handler.js'

app.use(express.json())
app.use('/api/v1/auth/', authRouter)

app.get("/dev", (req, res) => {
    res.send("Server is ready!")
})

app.listen(3000, () => {
    connectDB()
    console.log('Server started at port 3000....')
})
