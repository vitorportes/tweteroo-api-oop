import { Tweet } from "../model/Tweet.js";
import User from "../mongodb/models/user.js";
import Tweets from "../mongodb/models/tweet.js";

export class TweetsController {
  async postTweet(req, res) {
    const tweet = new Tweet(req.body);

    if (!tweet.username || !tweet.tweet) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }

    const { avatar } = await User.findOne({ username: tweet.username });

    const newPost = await Tweets.create({
      tweet: tweet.tweet,
      username: tweet.username,
    });

    res.status(201).send("OK, seu tweet foi criado");
  }

  async getTweetsByUserName(req, res) {
    const { username } = req.params;

    const tweetsDoUsuario = await Tweets.find({ username: username });

    res.status(200).send(tweetsDoUsuario);
  }

  async getAllTweets(req, res) {
    const { page } = req.params;
    const limite = 10;
    const start = (page - 1) * limite;

    const allTweets = await Tweets.find({})
      .sort({ _id: -1 })
      .skip(start)
      .limit(limite);

    res.status(200).send(allTweets);
  }
}
