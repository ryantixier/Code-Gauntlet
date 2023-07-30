const jwt = require("jsonwebtoken");

const secret = "TheGuntletOnlyReturnsNULLLLLllllllll";
const expiration = "1h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token;
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
