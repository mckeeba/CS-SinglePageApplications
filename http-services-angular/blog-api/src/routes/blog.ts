import express from "express";
import BlogController from "../controllers/blog.controller";
import PostDatabaseService from "../services/post-database.service";

const router = express.Router();
const blogController = new BlogController(new PostDatabaseService());

router.get("", blogController.getAllPosts);
router.get("/:postTitle", blogController.getPost);
router.post("", blogController.createPost);
router.put(
  "/:originalTitle/edit",
  blogController.updatePost
);
router.delete("/:postTitle", blogController.deletePost);
export default router;
