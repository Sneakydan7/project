import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  async getPosts() {
    return await (await fetch('../../assets/db.json')).json();
  }

  async modPosts() {
    return await (
      await fetch('../../assets/db.json', {
        method: 'PUT',
      })
    ).json();
  }
}
