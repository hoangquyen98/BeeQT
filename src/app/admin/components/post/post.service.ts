import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import {Post} from './post.model';
import {Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  constructor(private http: HttpClient, private router: Router) {}
  getPosts() {
    this.http
     .get<{message: string, posts: any}>('http://localhost:3000/api/posts')
     .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
            imagePath: post.imagePath
          };
        });
      }))
     .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
     });
  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  getPost(id: string) {
    return {...this.posts.find(p => p.id = id)};
  }
  addPost(titlePost: string, contentPost: string, imagePost: File) {
    const postData = new FormData();
    postData.append('title', titlePost);
    postData.append('content', contentPost);
    postData.append('image', imagePost);
    this.http.post<{message: string, post: Post}>('http://localhost:3000/api/posts', postData)
     .subscribe((resData) => {
        const post: Post = {
          id : resData.post.id,
          title : titlePost,
          content : contentPost,
          imagePath : resData.post.imagePath
        };
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
     });
  }
  updatePost(idPost: string, titlePost: string, contentPost: string, image: File | string) {

    let postData: Post | FormData;
    if (typeof image === 'object') {
      postData = new FormData();
      postData.append('id', idPost);
      postData.append('title', titlePost);
      postData.append('content', contentPost);
      postData.append('image', image, titlePost);
    } else {
      postData = {
        id: idPost,
        title: titlePost,
        content: contentPost,
        imagePath: image
      };
    }

    this.http.put('http://localhost:3000/api/posts/' + idPost, postData)
    .subscribe(res => {
       const updatePost = [...this.posts];
       const oldPostIndex = updatePost.findIndex(p => p.id === idPost);
       const post: Post = {
        id: idPost,
        title: titlePost,
        content: contentPost,
        imagePath: ''
      };
       updatePost[oldPostIndex] = post;
       this.posts = updatePost;
       this.postsUpdated.next([...this.posts]);
       this.router.navigate(['/']);
     });
  }
  deletePost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
   });
  }
}
