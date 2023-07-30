const submissions = [
  [
    {
      submitter: null,
      response: "",
    },
    {},
  ],
  [{}, {}],
  [{}, {}],
];
const challengeData = [
  {
    question: "Arrow Functions",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Beginner/question1.js",
    level: "Beginner",
  },
  {
    question: "Array Concatenation",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Beginner/question2.js",
    level: "Beginner",
  },
  {
    question: "Debugging Practice",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Beginner/question3.js",
    level: "Beginner",
  },
  {
    question: "Node.js Writing to a File",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Intermediate/question1.js",
    level: "Intermediate",
  },
  {
    question: "Higher Order Functions",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Intermediate/question2.js",
    level: "Intermediate",
  },
  {
    question: "forEach Loops",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Intermediate/question3.js",
    level: "Intermediate",
  },
  {
    question: "Fibonacci Sequence",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Advanced/question1.js",
    level: "Advanced",
  },
  {
    question: "Find the First Missing Positive Integer",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Advanced/question2.js",
    level: "Advanced",
  },
  {
    question: "Median of Arrays",
    questionRepoLink:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Advanced/question3.js",
    level: "Advanced",
  },
];

const preferenceOptions = ["Upvote", "Null"];
const { User, Challenge } = require("../models");

const seedChallenges = async (userIds) => {
  await Challenge.deleteMany({});
  const challenges = await Challenge.create(challengeData);
  //Populate user ids and votes on submissions
  for (let i = 0; i < submissions.size(); i++) {
    const userIdIndex = Math.floor(Math.random() * userIds.length);
    submissions[i].submitter = userIds[userIdIndex];
    const possibleVoters = userIds.splice(userIdIndex, 1);
    const numVotes = Math.floor(Math.random() * possibleVoters);
    const votes = [];
    for (let j = 0; j < numVotes; j++) {
      const uniqueVal = Math.floor(10 * Math.random()) % 2 == 0;
      votes.push({
        uniqueness: uniqueVal,
        preference: preferenceOptions[uniqueVal],
        voter: possibleVoters[j],
      });
    }
    submissions[i].votes = votes;
  }
  // challenges[0].submissions.push({
  //   submitter: userIds[0],
  //   responseRepoLink: "google.com",
  //   response: "nah",
  // });
  // challenges[0].submissions[0].votes.push({
  //   uniqueness: false,
  //   preference: "Upvote",
  //   voter: userIds[1],
  // });
  return await challenges[0].save();
};

module.exports = seedChallenges;
