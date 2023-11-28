import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private srv: ServiceService) {
    this.srv.getPosts().then((obj) => {
      this.posts = obj;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
