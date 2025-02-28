import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hidycoal:Idowu123@cluster0.yon1z.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

//mongodb+srv://hidycoal:Idowu123@cluster0.yon1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0