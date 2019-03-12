import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: this.newMethod(),
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(http: HttpClient) {
    http.get('jsonplaceholder.typicode.com/posts').subscribe(response => {
      console.log(response);
    });
   }

  private newMethod(): string {
    return './posts.component.html';
  }

  ngOnInit() {
  }

}
