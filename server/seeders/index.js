const seedUsers = require("./UserSeed.js");
const seedChallenges = require("./ChallengeSeed.js");
const db = require("../config/connection.js");

db.once("open", async () => {
  try {
    const userIds = await seedUsers();
    await seedChallenges(userIds);
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
});
