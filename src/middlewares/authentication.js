const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


const verifyUserToken = (req, res, next) => {
    try {
        console.log("How is server??")

        const verifyToken = req.headers["auth_token"];
        if (!verifyToken) {
            return res.status(401).json({
                status: "fail",
                unauthorizedAccess: "Access denied, Please login!"
            });
        }

        const decodedToken = jwt.verify(verifyToken, process.env.JWT_SECRET);
        req.user = decodedToken.id;
        next();
    } catch (err) {
        res.status(500).json({
            status: "fail",
            error: err.message
        });
    }
};

module.exports = verifyUserToken