import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected!")
    } catch (error) {
        console.error(`Connection error: ${error.message}`)
        process.exit(1)
    }
}