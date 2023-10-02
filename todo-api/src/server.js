import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import db from "./db.js";
import todoRouter from "./routes/todo.js";

dotenv.config();

const app = express();

// initializing the middlewares
app.use(morgan("tiny"));
app.use(express.json());

// connecting to mongoDB
db();

app.use(cors());
app.use("/api/v1/todo/", todoRouter);

// Running Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`*** Server is listening on PORT ${PORT} ***`);
});
