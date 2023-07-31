const submissions = [
  [
    {
      submitter: null,
      response: `const toggleElements = document.querySelectorAll('.toggle');
      toggleElements.forEach(el => {
        el.addEventListener('click', (e) => {
          e.currentTarget.classList.toggle('active');
        });
      });`,
    },
    {
      submitter: null,
      response: `const toggleElements = document.querySelectorAll('.toggle');
    toggleElements.forEach(el => {
      el.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });`,
    },
  ],
  [
    {
      submitter: null,
      response: `const a = [1, 2, 3];
    const b = [4, 5, 6];
    const combined = [...a, ...b];`,
    },
    {
      submitter: null,
      response: `const a = [1, 2, 3];
      const b = [4, 5, 6];
      const combined = a.concat(b);`,
    },
  ],
  [
    {
      submitter: null,
      response: `const example = () => {
      var a = 2;
      let b = 3;
      let d = 6;
      console.log(a + b); // Should return 5
      {
        var c = 5;
        
        console.log(c + d); // Should return 11
      }
      console.log(a + c); // Should return 7
      console.log(b + d); // Should return 9
    };`,
    },
    {
      submitter: null,
      response: `const example = () => {
        const a = 2;
        const b = 3;
        const d = 6;
        const c = 5;
        console.log(a + b); // Should return 5
        {
          console.log(c + d); // Should return 11
        }
        console.log(a + c); // Should return 7
        console.log(b + d); // Should return 9
      };`,
    },
  ],
];
const challengeData = [
  {
    question: "Arrow Functions",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Beginner/question1.js",
    level: "Beginner",
  },
  {
    question: "Array Concatenation",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Beginner/question2.js",
    level: "Beginner",
  },
  {
    question: "Debugging Practice",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Beginner/question3.js",
    level: "Beginner",
  },
  {
    question: "Node.js Writing to a File",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Intermediate/question1.js",
    level: "Intermediate",
  },
  {
    question: "Higher Order Functions",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Intermediate/question2.js",
    level: "Intermediate",
  },
  {
    question: "forEach Loops",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Intermediate/question3.js",
    level: "Intermediate",
  },
  {
    question: "Fibonacci Sequence",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Advanced/question1.js",
    level: "Advanced",
  },
  {
    question: "Find the First Missing Positive Integer",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Advanced/question2.js",
    level: "Advanced",
  },
  {
    question: "Median of Arrays",
    questionCode:
      "https://github.com/ryantixier/Code-Gauntlet/blob/main/Challenges/Advanced/question3.js",
    level: "Advanced",
  },
];

const preferenceOptions = ["Upvote", "Null"];
const { Challenge } = require("../models");

const seedChallenges = async (userIds) => {
  await Challenge.deleteMany({});
  const challenges = await Challenge.create(challengeData);
  //Populate user ids and votes on submissions
  for (let i = 0; i < submissions.length; i++) {
    let userIdsCopy = [...userIds];
    for (let k = 0; k < submissions[i].length; k++) {
      const userIdIndex = Math.floor(Math.random() * userIds.length);
      submissions[i][k].submitter = userIds[userIdIndex];
      const possibleVoters = userIdsCopy.splice(userIdIndex, 1);
      const votes = [];
      for (let j = 0; j < possibleVoters.length; j++) {
        const randPreferenceIndex = Math.floor(10 * Math.random()) % 2;
        const uniqueVal = randPreferenceIndex == 0;
        votes.push({
          uniqueness: uniqueVal,
          preference: preferenceOptions[randPreferenceIndex],
          voter: possibleVoters[j],
        });
      }
      submissions[i][k].votes = votes;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      challenges[i].submissions.push(submissions[i][j]);
    }
    await challenges[i].save();
  }
  return;
};

module.exports = seedChallenges;
