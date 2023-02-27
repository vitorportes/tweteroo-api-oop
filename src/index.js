import chalk from "chalk";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { json } from "express";

import { UserRouter } from "./routes/user-router.js";
import { TweetsRouter } from "./routes/tweet-router.js";
import connectDb from "./mongodb/connect.js";

dotenv.config();

const app = express();

const userRouter = new UserRouter();
const tweetRouter = new TweetsRouter();

app.use(cors());
app.use(json());
app.use(userRouter.router);
app.use(tweetRouter.router);

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
