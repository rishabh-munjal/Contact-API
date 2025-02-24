import express from "express";
import dotenv from "dotenv";
import bodyParser from "express";
import userRouter from "./routes/user.js"

import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

//*User Routes

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on Port :  ${PORT}`);
});
