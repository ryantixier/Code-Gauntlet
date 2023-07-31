const { AuthenticationError } = require("apollo-server-express");
const { User, Challenge } = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId });
    },

    challenges: async () => {
      return await Challenge.find({})
        .populate("submissions")
        .populate({ path: "submissions", populate: "submitter" });
    },

    challenge: async (parent, { challengeId }) => {
      return await Challenge.findOne({ _id: challengeId })
        .populate("submissions")
        .populate({ path: "submissions", populate: "submitter" });
    },

    submissions: async (parent, { challengeId }) => {
      const challenge = await Challenge.findOne({ _id: challengeId })
        .populate("submissions")
        .populate({
          path: "submissions",
          populate: ["submitter", { path: "votes", populate: "voter" }],
        });
      return challenge.submissions;
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
      { challengeId, submitterId, responseRepoLink, response },
      context
    ) => {
      // Uncomment after testing w/ apollo server
      // if (!context.user) {
      //   throw new AuthenticationError(
      //     "You must be logged in to add a submission!"
      //   );
      // }
      // swap in submissions body
      // submitter: context.user._id,
      return await Challenge.findOneAndUpdate(
        { _id: challengeId },
        {
          $addToSet: {
            submissions: {
              submitter: submitterId,
              responseRepoLink,
              response,
            },
          },
        },
        {
          new: true,
        }
      );
    },
    removeSubmission: async (
      parent,
      { challengeId, submissionId },
      context
    ) => {
      // Uncomment after testing w/ apollo server
      // if (!context.user) {
      //   throw new AuthenticationError(
      //     "You must be logged in to remove your submission!"
      //   );
      // }
      // add to filed-value obj for submissions , submitter: context.user._id
      //?? do we want to return an error if the submission was not entered by the user in context?
      return Challenge.findOneAndUpdate(
        { _id: challengeId },
        {
          $pull: {
            submissions: { _id: submissionId },
          },
        },
        { new: true }
      );
    },
    addVote: async (
      parent,
      { challengeId, submissionId, uniqueness, preference, voterId },
      context
    ) => {
      // Uncomment after testing w/ apollo server
      // if (!context.user) {
      //   throw new AuthenticationError("You must be logged in to vote!");
      // }
      // context.user._id
      const challenge = await Challenge.findOne({ _id: challengeId });
      challenge.submissions
        .id(submissionId)
        .votes.addToSet({ uniqueness, preference, voter: voterId });
      await challenge.save();
      return await Challenge.findOne({ _id: challengeId })
        .populate("submissions")
        .populate({
          path: "submissions",
          populate: ["submitter", { path: "votes", populate: "voter" }],
        });
    },
    removeVote: async (parent, { challengeId, submissionId, voteId }) => {
      const challenge = await Challenge.findOne({ _id: challengeId });
      const votes = challenge.submissions.id(submissionId).votes;
      //?? do we want to return an error if the submission was not entered by the user in context?
      votes.pull({ _id: voteId });
      await challenge.save();
      return await Challenge.findOne({ _id: challengeId })
        .populate("submissions")
        .populate({
          path: "submissions",
          populate: ["submitter", { path: "votes", populate: "voter" }],
        });
    },
  },
};

module.exports = resolvers;
