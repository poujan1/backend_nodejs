const jwt = require("jsonwebtoken");

const generateToken = (payload, secret) => {
  const token = jwt.sign(payload, secret);
  return token;
};

const hashPassword = async (password) => {
  const hashed = await bcrypt.hash(password);
  return hashed;
};
module.exports = { generateToken, hashPassword };
