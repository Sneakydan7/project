import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private srv: ServiceService) {
    this.srv.getPosts().then((obj) => {
      this.posts = obj;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
