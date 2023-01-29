import express from "express";
import blogController from "../controller/blog.controller";

const blogRoute = express.Router();

blogRoute.post("/create", blogController.createBlog); // create new blog

blogRoute.put("/updatePost/:id", blogController.updateBlog); //update existing blog

blogRoute.get("/getSingleBlog/:id", blogController.getSingleBlog); //get single blog

blogRoute.get("/getAllBlogs", blogController.getAllBlogs); //Get all blogs








export default blogRoute;