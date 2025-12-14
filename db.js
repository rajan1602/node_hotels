import mongoose from "mongoose";
import dotenv from "dotenv";    
dotenv.config();

//const mongoURL = "mongodb://localhost:27017/hotel";
const mongoURL = process.env.MONGODBURL || "mongodb://localhost:27017/hotel"; 

// Connect to MongoDB
mongoose.connect(mongoURL)
// Handle connection events
const db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDB connected successfully");
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

db.on("error", (err) => {
    console.log("MongoDB connection error:", err);
});

export default db;
