import path from "path";
import Post from "../models/post.model";
import fs from "fs";

/**
 * Service for interacting with the simple json database.
 * 
 * @author Willow Sapphire
 * @version 04/10/2023
 */
export default class PostDatabaseService
{
  /**
   * The path to the json database file.
   */
  private postPath = path.resolve(__dirname, "../../db/posts.json");

  /**
   * The contents of the database that were last retrieved.
   */
  private currFileContents: Array<Post> | undefined;

  /**
   * Adds a post to the database file.
   * 
   * @param post the post to add
   */
  createPost({post}: {post: Post}) {
    this.assureFileRead();
    let fileContents = this.getDatabaseContents();
    if (fileContents === undefined || fileContents === "") fileContents = "[]";
    this.currFileContents = JSON.parse(fileContents);
    this.currFileContents!.push(post);
    this.updatePostFile();
  };

  /**
   * Gets a single post From the databaser.
   * 
   * @param param0 
   * @returns the post or null if the post was not found
   */
  getPost({postTitle}: {postTitle: string}): Post | null {
    this.assureFileRead();
    for (let val of this.currFileContents!)
      if (val.title === postTitle)
        return val;
    return null;
  }

  getPosts(): Array<Post> | undefined {
    this.assureFileRead();
    return this.currFileContents;
  }

  updatePost({
    originalTitle,
    newTitle,
    newContents,
    newAuthor,
    date,
  }: {
    originalTitle: string,
    newTitle: string,
    newContents: string,
    newAuthor: string,
    date: Date,
  }) {
    this.assureFileRead();
    for (let post of this.currFileContents!) {
      if (post.title === originalTitle) {
        post.title = newTitle,
        post.contents = newContents;
        post.author = newAuthor;
        post.dates.push(date);
        break;
      }
    }
    this.updatePostFile();
  }

  deletePost({postTitle}: {postTitle: string;}) {
    this.assureFileRead();
    let newFileContents: Array<Post> = [];
    this.currFileContents!.forEach((post: Post) => {
      if (post.title != postTitle)
        newFileContents.push(post);
    });
    this.currFileContents = newFileContents;
    this.updatePostFile();
  }

  private assureFileRead() {
    if (this.currFileContents === undefined) {
      let fileContents = this.getDatabaseContents();
      if (fileContents === undefined || fileContents.length < 1) {
        this.currFileContents = [];
      }
      else {
        this.currFileContents = JSON.parse(fileContents);
      }
    }
  }

  /**
   * Helper method to update the database file.
   */
  private updatePostFile() {
    fs.writeFileSync(this.postPath, JSON.stringify(this.currFileContents));
  }

  /**
   * Helper method to get the contents of the database.
   * 
   * @returns the contents of the file or undefined if the file ws not found
   */
  private getDatabaseContents(): string | undefined {
    return fs.readFileSync(this.postPath, "utf8");
  }
}
