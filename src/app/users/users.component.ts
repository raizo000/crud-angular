import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { retrievedUsers } from '../state/user.action';
import { selectUser, selectUserCollection } from '../state/user.selector';
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

  users$ = this.store.select(selectUser);

  constructor(private userService: UserService, private store: Store) {}

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userSubscription = this.userService.getUsers().subscribe((users) => {
      this.store.dispatch(retrievedUsers({ users }));
    });
  }
}
