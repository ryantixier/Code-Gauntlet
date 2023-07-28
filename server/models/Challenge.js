const { Schema, model } = require("mongoose");

const challengeSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  codeAnswer: {
    type: String,
    required: true,
  },
  status: {
    //If we want users to be able to save a draft of their work.
    type: String,
    enum: ["Open", "In Progress", "Complete"],
  },
  votes: [{ type: Schema.Types.ObjectID, ref: "Vote" }],
});

const Challenge = model("Challenge", challengeSchema);

module.exports = Challenge;
