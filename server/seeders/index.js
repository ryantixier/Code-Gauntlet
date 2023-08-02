require("dotenv").config();
const seedUsers = require("./UserSeed.js");
const seedChallenges = require("./ChallengeSeed.js");
const db = require("../config/connection.js");

db.once("open", async () => {
  try {
    console.log("Seeding started");
    const userIds = await seedUsers();
    console.log(userIds);
    await seedChallenges(userIds);
    console.log("Database seeded!");
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
});
