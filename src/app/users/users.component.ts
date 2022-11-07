import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { selectUsers } from '../state/user.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users$ = this.store.select(selectUsers).pipe(tap(console.log));

  constructor(private store: Store) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[Users Page] Load Movies' });
  }

  getUsers() {}
}
