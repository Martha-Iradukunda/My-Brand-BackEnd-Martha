const User = require('../middleware/Models/user.model.js');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


const verifyAdmin = async(req, res, next) => {
    try {


        const verifyToken = req.headers["auth_token"];
        console.log({ verifyToken })

        if (!verifyToken) {

            return res.status(401).json({
                status: "fail",
                unauthorizedAccess: "Access denied, Please login!"
            });
        }
        const { err, value: decodedToken } = jwt.verify(verifyToken, process.env.JWT_SECRET, (err, value) => {

            return { err, value }

        });

        if (err) {
            console.log(err);
            return res.status(401).json({
                status: "fail",
                unauthorizedAccess: "Access denied, Bad token!"
            });
        } else {

            req.user = decodedToken.id;

            const loggeInUser = await User.findOne({ _id: req.user })
            const userRole = loggeInUser.role
            console.log(loggeInUser)

            if (userRole !== "admin") {
                return res.status(401).json({
                    status: "fail",
                    unauthorized: "You are not allowed to peform this action"
                })
            }

            next();
        }

    } catch (err) {
        res.status(500).json({
            status: "fail",
            errror: err.message
        });
    }
};

module.exports = verifyAdmin