const { Schema, model } = require("mongoose");

const voteSchema = new Schema({
  challenge: {
    type: Schema.Types.ObjectID,
    ref: "Challenge",
  },
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

const Vote = model("Vote", voteSchema);

module.exports = Vote;
