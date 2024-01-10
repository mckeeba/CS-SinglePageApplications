import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import Post from '../models/post.model';


const BACKEND_URL = 'http://localhost:3000/api/blog/';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  posts: Array<Post> = [];
  
  
  constructor(private http:HttpClient,private router:Router){}
  
  addPost(postForm: NgForm) {
    
    const postData:Post = {
      title: postForm.value.title,
      author: postForm.value.author,
      contents: postForm.value.contents,
      id: '',
      dates: new Array<Date>
    }

     this.http.post<Post>(BACKEND_URL,postData).subscribe(postData => 
      {
        this.posts.push(postData);
       // this.postsUpdated.next({posts:[...this.posts]});

        this.router.navigate(['/blog']);
      });
  }
  
}
