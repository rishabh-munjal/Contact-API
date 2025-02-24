import express from "express";
import dotenv from "dotenv";
import bodyParser from "express";
import userRouter from "./routes/user.js"
import contactRouter from "./routes/contact.js"

import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(bodyParser.json());
const PORT = 3000;

//*User Routes

app.use("/api/user", userRouter);

//* contact Router
app.use("/api/contact" , contactRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on Port :  ${PORT}`);
});
