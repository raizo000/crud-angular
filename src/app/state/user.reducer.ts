import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../user.modal';
import {
  addNewUser,
  getUserDetailSuccess,
  retrievedUsers
} from './user.action';

export const initialState: ReadonlyArray<User> = [];

export const userFeatureKey = 'userFeature';

export const usersReducer = createReducer(
  initialState,
  on(retrievedUsers, (state, { users }) => {
    return { ...state, users };
  }),
  on(addNewUser, (state, { user }) => {
    return [...state, user];
  }),
  on(getUserDetailSuccess, (state, { user }) => {
    return { ...state, userDetail: user };
  })
);