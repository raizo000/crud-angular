import { User } from '../user.modal';
import { createAction, props } from '@ngrx/store';

export const addNewUser = createAction(
  '[User] Add new user',
  props<{ user: User }>()
);

export const removeUser = createAction(
  '[User] Remove User',
  props<{ userId: string }>()
);

export const retrievedUsers = createAction(
  '[User List] Retrieve User Success',
  props<{ users: ReadonlyArray<User> }>()
);
