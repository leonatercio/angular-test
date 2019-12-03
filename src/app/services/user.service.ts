import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

@Injectable()
export class UserService {
  apiUrl: any;
  limit: 30;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://api.template.megaleios.com/api/v1/';
  }

  getAll() {
    return this.http.get<any>(this.apiUrl + 'Profile/List?limit=' + this.limit);
  }

  create(user: User) {
    return this.http.post(this.apiUrl + 'Profile/Register', user);
  }
}
