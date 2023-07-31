const userData = [
  {
    name: "C.A.R. Hoare",
    email: "choare@techfriends.dev",
    password: "password07",
  },
  {
    name: "David Thomas",
    email: "dthomas@techfriends.dev",
    password: "password08",
  },
  {
    name: "Donald Knuth",
    email: "dknuth@techfriends.dev",
    password: "password09",
  },
  {
    name: "Lernantino",
    email: "lernantino@techfriends.dev",
    password: "password10",
  },
];
const { User } = require("../models");
const seedUsers = async () => {
  await User.deleteMany({});
  const result = await User.create(userData);
  const userIds = [];
  result.map((user) => userIds.push(user._id));
  return userIds;
};
module.exports = seedUsers;
