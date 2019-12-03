import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';
import { UserService, AuthenticationService } from '../services/index';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users.data;
    });
  }

  logout() {
    this.loading = true;
    this.router.navigate(['/login']);
    this.loading = false;
  }
}
