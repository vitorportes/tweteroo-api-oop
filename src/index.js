import chalk from "chalk";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { json } from "express";

import userRouter from "./routes/user-router.js";
import tweetRouter from "./routes/tweet-router.js";
import connectDb from "./mongodb/connect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(userRouter);
app.use(tweetRouter);

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(5001, () => {
      console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
