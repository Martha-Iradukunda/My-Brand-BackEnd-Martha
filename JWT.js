//create token,another function is to verify it
const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
    const accessToken = sign({ username: user.username, id: user.id }, "jwtSecretplschange"

    );
    return accessToken;
};
module.exports = { createTokens };