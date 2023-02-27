import { Router } from "express";
import { TweetsController } from "../controllers/tweet-controller.js";

const tweetRouter = Router();
const tweetsController = new TweetsController();

tweetRouter.post("/tweets", tweetsController.postTweet);
tweetRouter.get("/tweets/:username", tweetsController.getTweetsByUserName);
tweetRouter.get("/alltweets/:page", tweetsController.getAllTweets);

export default tweetRouter;
