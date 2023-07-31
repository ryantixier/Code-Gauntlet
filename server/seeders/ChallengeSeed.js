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
    questionCode: `// TODO: Rewrite the following Event Listener using arrow functions

    const toggleElements = document.querySelectorAll(".toggle");
    toggleElements.forEach(function () {
      el.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
    `,
    level: "Beginner",
  },
  {
    question: "Array Concatenation",
    questionCode: `// TODO: Concatenate the following arrays using one line of code.  How many ways can you do it?

      const a = [1, 2, 3];
      
      const b = [4, 5, 6];
      
      // Your code here
      `,
    level: "Beginner",
  },
  {
    question: "Debugging Practice",
    questionCode: `// TODO: Debug the following code so that all expected values are returned.

      const example = () => {
        var a = 2;
        let b = 3;
        console.log(a + b); // Should return 5
        {
          var c = 5;
          let d = 6;
          console.log(c + d); // Should return 11
        }
        console.log(a + c); // Should return 7
        console.log(b + d); // Should return 9
      };
      `,
    level: "Beginner",
  },
  {
    question: "Node.js Writing to a File",
    questionCode: `// TODO: Finish the function below so the the string "is passed" is successfully written to testFile.json

      const fs = require("fs");
      
      const JSONToFile = (obj, filename) =>
        // Your code here
      
        JSONToFile({ test: "is passed" }, "testFile");
      `,
    level: "Intermediate",
  },
  {
    question: "Higher Order Functions",
    questionCode: `// TODO: Using advanced array methods, construct two higher order functions that can display the following data: [2, 4, 6] and a sum of that array (12).

      const add = (a, b) => a + b;
      const isEven = (num) => num % 2 === 0;
      
      const data = [2, 3, 1, 5, 4, 6];
      
      // Your code here
      `,
    level: "Intermediate",
  },
  {
    question: "forEach Loops",
    questionCode: `// TODO: Finish the two forEach loops so that one returns the values of the array (a, b, c) and the other returns the indexes of the array (0, 1, 2)

     ["a", "b", "c"].forEach();
     
     ["a", "b", "c"].forEach();`,
    level: "Intermediate",
  },
  {
    question: "Fibonacci Sequence",
    questionCode: `// TODO: Complete the function so that the first six digits of the Fibonacci sequence (0, 1, 1, 2, 3, 5) are returned

    const fibonacci = (n) => {
      // Your code here
    };
    `,
    level: "Advanced",
  },
  {
    question: "Find the First Missing Positive Integer",
    questionCode: `// TODO: Given an unsorted integer array [nums], return the smallest missing positive integer.

    const firstMissingPositive = function (nums) {
      // Your code here
    };
    
    // Example 1:
    
    // Input: nums = [1,2,0]
    // Output: 3
    // Explanation: The numbers in the range [1,2] are all in the array.
    // Example 2:
    
    // Input: nums = [3,4,-1,1]
    // Output: 2
    // Explanation: 1 is in the array but 2 is missing.
    // Example 3:
    
    // Input: nums = [7,8,9,11,12]
    // Output: 1
    // Explanation: The smallest positive integer 1 is missing.
    
      `,
    level: "Advanced",
  },
  {
    question: "Median of Arrays",
    questionCode: `// TODO: Find and return the median of the two arrays

      const nums1 = [1, 2, 3];
      const nums2 = [4, 5, 6];
      
      const findMedianSortedArrays = function (nums1, nums2) {
        // Your code here
      };
      
      // Should return 3.5
      `,
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
