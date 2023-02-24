import { Router } from "express";
import {
  getAllTweets,
  getTweetsByUserName,
  postTweet,
} from "../controllers/tweet-controller.js";

const tweetRouter = Router();

tweetRouter.post("/tweets", postTweet);
tweetRouter.get("tweets/:username", getTweetsByUserName);
tweetRouter.get("/tweets", getAllTweets);

export default tweetRouter;
