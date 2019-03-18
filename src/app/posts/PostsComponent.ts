import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: Object;
  id: number;
  DeviceID: String;
  Latitude: number;
  Longitude: number;
  Date: String;

  
  constructor(http: HttpClient) {
    http.get('/sigfox/sigfox?deviceID=0F2223').subscribe(response => {
      this.posts = response;
      this.id = this.posts[0].id;
      this.DeviceID = this.posts[0].deviceId;
      this.Latitude = this.posts[0].geoloc.latitude;
      this.Longitude = this.posts[0].geoloc.longitude;
      this.Date = this.posts[0].time;
    });
  }
  ngOnInit() {
  }
}
