const jwt = require("jsonwebtoken");

const secret = "TheGuntletOnlyReturnsNULLLLLllllllll";
const expiration = "5m";

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
