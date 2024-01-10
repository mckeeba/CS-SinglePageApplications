import { Component,OnInit } from '@angular/core';
import Post from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { NgControl } from '@angular/forms';


const BACKEND_URL = 'http://localhost:3000/api/blog/';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  loading = false;
  posts: Array<Post> = [];
  
  
  constructor(private http: HttpClient)
  {
    
  }

  ngOnInit(): void {
      this.getAllPosts();
  }


  getAllPosts():void {
      this.loading = true;

      this.http.get<{posts:Array<Post>}>(BACKEND_URL).subscribe((thePosts:{posts:Array<Post>})=>
      {
       if(thePosts){
        this.posts = thePosts.posts; 
        this.loading = false;
       }
      });
    
  }

  deletePost(postTitle: string)
  {
     this.http.delete<{success:boolean}>(BACKEND_URL + postTitle).subscribe((_:{success:boolean})=>
     {
        //NEED to update the post list 
        
        this.getAllPosts();
        
        return {success:true};

     });
  }
}
