import express from 'express'
import UserController from '../Controller/user.controller'
import User from '../middleware/Models/user.model';
import verifyUserToken from '../middlewares/authentication';
import verifyAdmin from '../middlewares/verify.admin';

const userRoute = express.Router();




userRoute.post("/login", UserController.login);





userRoute.post("/createUser", UserController.createUser);
userRoute.get("/getSingleUser/:id", verifyAdmin, UserController.getSingleUser);
userRoute.get("/getAllUsers", UserController.getAllUsers)

export default userRoute