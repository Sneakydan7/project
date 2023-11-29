import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Post } from '../../models/post';
import { CustomComponentComponent } from '../custom-component/custom-component.component';
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

  changeActive() {
    this.srv.modPosts().then((obj) => {
      obj.forEach((e: any) => {
        if (e.active === 'true') {
          e.active = 'false';
        } else if (e.active === 'false') {
          e.active = 'true';
        }
      });
    });
  }
}
