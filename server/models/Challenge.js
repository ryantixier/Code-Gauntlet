const { Schema, model } = require("mongoose");

const voteSchema = new Schema({
  uniqueness: {
    type: Boolean,
  },
  preference: {
    type: String,
    required: true,
    enum: ["Null", "Upvote"],
  },
  voter: {
    type: Schema.Types.ObjectID,
    ref: "User",
  },
});

const submission = new Schema({
  submitter: { type: Schema.Types.ObjectID, ref: "User" },
  responseRepoLink: { type: String },
  response: { type: String, required: true },
  votes: [voteSchema],
});

const challengeSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  questionRepoLink: {
    type: String,
    required: true,
  },
  submissions: [submission],
});

const Challenge = model("Challenge", challengeSchema);

module.exports = Challenge;
