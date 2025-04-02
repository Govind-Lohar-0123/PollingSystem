import express, { json } from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./utils/dbConnect.js";
import quesRouter from "./routes/quesRoute.js";
import studentRouter from "./routes/studentRoute.js"
import ques from "./data.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(cors());
connectDB();


app.use(json());
app.use("/", quesRouter);
app.use("/", studentRouter);




app.listen(PORT, () => {
    
})



