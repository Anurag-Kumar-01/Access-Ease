import mongoose from "mongoose";

const db_name = "AcessEase"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.VITE_MONGO_URI}/${db_name}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;