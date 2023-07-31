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

const submissionSchema = new Schema({
  submitter: {
    type: Schema.Types.ObjectID,
    ref: "User",
    required: true,
  },
  responseRepoLink: {
    type: String,
  },
  response: {
    type: String,
    required: true,
  },
  votes: [voteSchema],
});

const challengeSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  questionCode: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  submissions: [submissionSchema],
});

const Challenge = model("Challenge", challengeSchema);

module.exports = Challenge;
