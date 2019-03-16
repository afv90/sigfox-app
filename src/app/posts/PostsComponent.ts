import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: Object;
  
  constructor(http: HttpClient) {
    http.get('/sigfox/sigfox?deviceID=0F2223').subscribe(response => {
      this.posts = response;
    });
  }
  ngOnInit() {
  }
}
