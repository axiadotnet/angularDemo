import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allUsers: any[];
  private allPosts: any[];

  public postsData: BehaviorSubject<any[]>;

  public usersData: BehaviorSubject<any[]>;

  constructor(private apiService: ApiService) {
    this.postsData = new BehaviorSubject<any[]>([]);
    this.usersData = new BehaviorSubject<any[]>([]);
    this.initData();
  }


  public initData() {
    this.updateUsers();
    this.updatePosts();
  }

  updateUsers() {
    this.apiService.getUser().subscribe(u => {
      this.allUsers = u;
      this.usersData.next(this.allUsers);
    });
  }

  updatePosts() {
    this.apiService.getPost().subscribe(p => {
      this.allPosts = p;
      this.postsData.next(this.allPosts);
    });
  }

  // filterUser(searchText: string) {
  //   const filteredUsers = this.allUsers.filter(u => u.name.toLowerCase().includes(searchText.toLowerCase()));
  //   this.usersData.next(filteredUsers);

  //   console.log(filteredUsers.map(u => u.id));
  //   const filteredPosts = this.allPosts.filter(p => filteredUsers.map(u => u.id).includes(p.userId));

  //   console.log(filteredPosts);

  //   this.postsData.next(filteredPosts);
  // }

  filterUser(searchText: string) {
    const filteredUsers = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.allUsers.length; i++) {
      const user = this.allUsers[i];
      if (user.name.toLowerCase().includes(searchText.toLowerCase())) {
        filteredUsers.push(user);
      }
    }

    console.log(filteredUsers);
    this.usersData.next(filteredUsers);


    const filteredUsersIds = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < filteredUsers.length; i++) {
      const user = filteredUsers[i];
      filteredUsersIds.push(user.id);
    }

    const filteredPosts = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.allPosts.length; i++) {
      const post = this.allPosts[i];
      if (filteredUsersIds.includes(post.userId)){
        filteredPosts.push(post);
      }
    }

    this.postsData.next(filteredPosts);
  }

}
