import { Router } from "express";
import { TweetsController } from "../controllers/tweet-controller.js";
export class TweetsRouter {
  constructor() {
    this.tweetsController = new TweetsController();
    this.router = Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.post("/tweets", this.tweetsController.postTweet);
    this.router.get(
      "/tweets/:username",
      this.tweetsController.getTweetsByUserName
    );
    this.router.get("/alltweets/:page", this.tweetsController.getAllTweets);
  }
}
