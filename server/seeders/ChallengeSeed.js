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
    question: "Fibonaccie Sequence",
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
const { Challenge } = require("../models");

const seedChallenges = async (userIds) => {
  const submissionOnevotes = [
    { uniqueness: true, preference: "Null", voter: null },
    { uniqueness: true, preference: "Null", voter: null },
    { uniqueness: false, preference: "Upvote", voter: null },
    { uniqueness: false, preference: "Upvote", voter: null },
    { uniqueness: true, preference: "Upvote", voter: null },
    { uniqueness: false, preference: "Null", voter: null },
  ];

  const challengeOneSubmissionData = [
    {
      submitter: null,
      responseRepoLink: null,
      response: null,
      votes: submissionOnevotes,
    },
  ];

  const result = await Challenge.create();
  const userIds = [];
  result.map((user) => userIds.push(user._id));
  return userIds;
};

module.exports = seedChallenges;
