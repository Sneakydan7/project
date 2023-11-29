import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.scss'],
})
export class CustomComponentComponent implements OnInit {
  constructor(private srv: ServiceService) {
    this.srv = srv;
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
