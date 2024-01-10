import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Post from '../models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = 'http://localhost:3000/api/blog/';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post?: Post;
  editAuthor = true;
  editTitle = true;
  loading = true;
  originalTitle!: string;


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAPost();
  }

  getAPost(): void {
   
    this.route.params.subscribe(
      (params) => {
        this.originalTitle = params['postTitle'];
        this.http.get<{ post: Post }>(BACKEND_URL + this.originalTitle).subscribe(
          (thePost: {post: Post}) => {
            if (thePost) {
              this.post = thePost.post;
              this.loading = false;
            }
          }
        );
      }
    );
  }

editPost(postEditForm: NgForm) {


  //if(this.post){
  const postEditData = {

    newTitle: postEditForm.value.title,
    newContents:postEditForm.value.contents,
    newAuthor: postEditForm.value.author,
     newDate: new Date(),
  }

  this.http.put<{success: boolean}>(BACKEND_URL + this.originalTitle + '/edit', postEditData).subscribe(_=>
  {
    


      this.router.navigate(['/blog']);

      this.loading = false;

      


      //return {success:true};
    
  });
 }
 
}


