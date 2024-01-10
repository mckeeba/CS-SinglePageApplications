import { Request, Response, NextFunction } from "express";
import PostDatabaseService from "../services/post-database.service";
import Post from "../models/post.model";

/**
 * Functions to handle different requests related to the blog.
 * 
 * @author Willow Sapphire
 * @version 04/10/2023
 */
export default class BlogController {

  /**
   * Constructs a new BlogController.
   * 
   * @param postDatabaseService a service used to interact with the databsase
   */
  constructor(private postDatabaseService: PostDatabaseService) {}

  /*
   * Expects a post object as the body
   */
  createPost = (req: Request, res: Response, next: NextFunction) => {
    // Do not save posts that have no title.
    if (req.body.title === undefined || req.body.title === null || req.body.title.length < 1)
      res.status(500);
    let post: Post = {
      id: req.body.title as string + Date.now().toFixed(),
      title: req.body.title as string,
      contents: req.body.contents as string,
      author: req.body.author as string,
      dates: req.body.dates as Date[],
    };
    this.postDatabaseService
      .createPost({post})
      res.status(201).json({post});
  };

  /*
   * Expects params with:
   *    postTitle
   */
  getPost = (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json(
      {post: this.postDatabaseService.getPost({postTitle: req.params.postTitle})}
    );
  }

  /*
   * No body or params expectations.
   */
  getAllPosts = (req: Request, res: Response, next: NextFunction) => {
    let posts = this.postDatabaseService.getPosts();
    if (posts === undefined) {
      posts = []; 
    }
    res.status(201).json({posts: posts});
  }

  /*
   * Expects params with:
   *    originalTitle 
   * Expects body with
   *    newTitle,
   *    newContents,
   *    newAuthor
   *    newDate
   */
  updatePost = (req: Request, res: Response, next: NextFunction) => {
    this.postDatabaseService.updatePost({
      originalTitle: req.params.originalTitle,
      newTitle: req.body.newTitle,
      newContents: req.body.newContents,
      newAuthor: req.body.newAuthor,
      date: new Date(req.body.newDate as string),
    });
    res.status(200).json({success: true});
  }

  /*
   * Expects params with:
   *    postTitle
   */
  deletePost = (req: Request, res: Response, next: NextFunction) => {
    this.postDatabaseService.deletePost({postTitle: req.params.postTitle});
    res.status(200).json({success: true});
  }
}