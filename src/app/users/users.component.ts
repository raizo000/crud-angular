import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user.modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  userSubscription: Subscription = new Subscription();
  constructor(private userService: UserService) {}
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userSubscription = this.userService
      .getUsers()
      .subscribe((users) => (this.users = users));
  }
}
