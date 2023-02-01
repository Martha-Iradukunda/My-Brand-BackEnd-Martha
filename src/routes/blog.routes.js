import express from "express";
import blogController from "../controller/blog.controller";
import verifyAdmin from "../middlewares/verify.admin";
const blogRoute = express.Router();

//routes

/**
 * @swagger
 * components:
 *  responses:
 *           200:
 *               description: Success
 *           400:
 *               description: Bad request
 *           401:
 *               description: Authorization
 *           404:
 *               description: Not found
 *           500:
 *               description: Unexpected error.
 *  schemas:
 *      Blog:
 *          type: object
 *          required:
 *              -title
 *              -blogBody
 *          properties:
 *              title:
 *                  type: string
 *                  description: name of user
 *              blogBody:
 *                  type: string
 *                  description: password of user
 *          example:
 *              title: Coding is gonna be fun.
 *              blogBody: for real education hide everything we need
 *  parameters:
 *           blogId:
 *              name : id
 *              in : path
 *              description: Id for specified blogId
 *              required: true
 *              schema:
 *                 type: string
 */

/**
 * @swagger
 * tags:
 *  name: Blog
 *  description: All Blogs created
 */

//Get all blogs created
/**
 * @swagger
 * /api/blogs:
 *  get:
 *    summary: getting all blogs published
 *    tags: [Blog]
 *    responses:
 *          200:
 *            description: All blogs is here!
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                items:
 *                  $ref: '#/components/schemas/Blog'
 */

blogRoute.get("/blogs", blogController.getAllBlogs); //Get all blogs
blogRoute.post("/blogs", blogController.createBlog); // create new blog
blogRoute.put("/blogs/:id", verifyAdmin, blogController.updateBlog); //update existing blog
blogRoute.get("/blogs/:id", blogController.getSingleBlog); //get single blog

export default blogRoute;