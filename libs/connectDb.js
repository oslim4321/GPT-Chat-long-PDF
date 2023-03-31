import mongoose from "mongoose";

async function dbConnect() {
  console.log(process.env.MONGODB_URI);
  return mongoose.connect(process.env.MONGODB_URI);
}

export default dbConnect;
