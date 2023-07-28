const { Schema, model } = require("mongoose");

const submission = new Schema({
  submitter: { type: Schema.Types.ObjectID, ref: "User" },
  responseRepoLink: { type: String, required: true },
  votes: [{ type: Schema.Types.ObjectID, ref: "Vote" }],
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
