const { AuthenticationError } = require("apollo-server-express");
const { User, Challenge } = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    challenges: async () => {
      return Challenge.find({}).populate("submissions").populate({
        path: "submissions",
        populate: "votes",
      });
    },

    challenge: async (parent, { challengeId }) => {
      return Challenge.findOne({ _id: challengeId })
        .populate("submissions")
        .populate({
          path: "submissions",
          populate: "votes",
        });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No User with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addSubmission: async (
      parent,
      { challengeId, submitterId, responseRepoLink, response }
    ) => {
      return await Challenge.findOneAndUpdate(
        { _id: challengeId },
        {
          $addToSet: {
            submissions: { submitter: submitterId, responseRepoLink, response },
          },
        },
        {
          new: true,
        }
      );
    },
    removeSubmission: async (parent, { challengeId, submissionId }) => {
      return Challenge.findOneAndUpdate(
        { _id: challengeId },
        { $pull: { submissions: { _id: submissionId } } },
        { new: true }
      );
    },
    addVote: async (
      parent,
      { challengeId, submissionId, uniqueness, preference, voterId }
    ) => {
      const challenge = await Challenge.findOne({ _id: challengeId });
      challenge.submissions
        .id(submissionId)
        .votes.addToSet({ uniqueness, preference, voter: voterId });
      return await challenge.save();
    },
    removeVote: async (parent, { challengeId, submissionId, voteId }) => {
      const challenge = await Challenge.findOne({ _id: challengeId });
      const votes = challenge.submissions.id(submissionId).votes;
      votes.pull({ _id: voteId });
      return await challenge.save();
    },
  },
};

module.exports = resolvers;
