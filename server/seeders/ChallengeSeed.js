const challengeData = [
  { question: "Example 1", questionRepoLink: null, level: "Beginner" },
  { question: null, questionRepoLink: null, level: "Beginner" },
  { question: null, questionRepoLink: null, level: "Beginner" },
  { question: null, questionRepoLink: null, level: "Intermediate" },
  { question: null, questionRepoLink: null, level: "Intermediate" },
  { question: null, questionRepoLink: null, level: "Intermediate" },
  { question: null, questionRepoLink: null, level: "Advanced" },
  { question: null, questionRepoLink: null, level: "Advanced" },
  { question: null, questionRepoLink: null, level: "Advanced" },
];
const preferenceOptions = ["Upvote", "Null"];
const { Challenge } = require("../models");

const seedChallenges = async (newUserIds) => {
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
  return result;
};

module.exports = seedChallenges;
