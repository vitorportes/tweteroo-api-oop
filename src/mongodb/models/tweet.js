import mongoose from "mongoose";

const Tweets = new mongoose.Schema({
  tweet: { type: String, required: true },
  username: { type: String, required: true },
});

const tweetSchema = mongoose.model("Tweet", Tweets);

export default tweetSchema;
