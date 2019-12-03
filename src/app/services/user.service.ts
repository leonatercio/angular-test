import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>('http://api.template.megaleios.com/api/v1/Profile/List?limit=30');
  }

  create(user: User) {
    return this.http.post('http://api.template.megaleios.com/api/v1/Profile/Register', user);
  }
}
