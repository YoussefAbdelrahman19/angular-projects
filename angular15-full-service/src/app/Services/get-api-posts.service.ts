import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetApiPostsService {
  constructor(private httpClient: HttpClient) {}
  getAllPost() {
    //jsonplaceholder.typicode.com/posts
    // https: return this.httpClient.get(`${Environment.postsApiLink}/posts`);
    https: return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
  }
}
