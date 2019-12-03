import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  headers: any = new Headers();
  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {
    return this.http.post<any>('http://api.template.megaleios.com/api/v1/Profile/Token', { login: login, password: password })
      .pipe(
        map(user => {
          if (user.data && user.data.access_token) {
            localStorage.setItem('currentUser', JSON.stringify(user.data));
          }
          return user.data;
        })
      );
  }

  getToken() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.access_token;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
