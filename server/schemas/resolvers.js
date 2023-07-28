const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }, contextValue) => {
      const user = await User.create({ name, email, password });
      const token = contextValue.signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }, contextValue) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No User with this email found!");
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = contextValue.signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
