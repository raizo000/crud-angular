import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, switchMap } from 'rxjs';
import { catchError, debounceTime, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import {
  getUserDetail,
  getUserDetailSuccess,
  retrievedUsers,
} from './user.action';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Users Page] Load Movies'),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => retrievedUsers({ users })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadUserDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserDetail),
      map((data) => data.id),
      switchMap((id) =>
        this.userService
          .getUserById(+id)
          .pipe(map((res) => getUserDetailSuccess({ user: res })))
      )
    )
  );
}
