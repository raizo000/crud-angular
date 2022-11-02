import { createReducer, on } from '@ngrx/store';
import { User } from '../user.modal';
import { addNewUser, retrievedUsers } from './user.action';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(retrievedUsers, (state, { users }) => users),
  on(addNewUser, (state, { user }) => {
    return [...state, user];
  })
);

export const userFeatureKey = 'userFeature';
