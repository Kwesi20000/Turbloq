import mongoose from 'mongoose'
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hendrickskumi0:<SOLNman20>@cluster0.sl0as16.mongodb.net/turbloq')
    console.log("DB Connected")
}