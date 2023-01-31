import express from "express";
import blogController from "../controller/blog.controller";
import verifyAdmin from "../middlewares/verify.admin";
const blogRoute = express.Router();

//routes

/**
 * @swagger
 * /api/blogs.routes:
 *   get:
 *      summary: For getting all blogs
 *      tags:[Blog]
 * 
 *    description: Returns all blogs
 *    response:
 *      200:
 *         description: All blogs returned successfully
 *         content:
 *           application/json:
 *            schema:
 *           type:'object'

 */

blogRoute.post("/create", blogController.createBlog); // create new blog

blogRoute.put("/updatePost/:id", verifyAdmin, blogController.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:id", blogController.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs", blogController.getAllBlogs); //Get all blogs







export default blogRoute;