const crypto = require("crypto");
function comparePasswords(plainPassword, hashedPassword) {
    const hash = crypto.createHash('sha256');
    hash.update(plainPassword);
    const hashedPlainPassword = hash.digest('hex');
    return hashedPlainPassword === hashedPassword;
  }
module.exports = comparePasswords