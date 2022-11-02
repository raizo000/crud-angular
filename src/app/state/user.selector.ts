import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../user.modal';

export const selectUser = createFeatureSelector<ReadonlyArray<User>>('users');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectUserCollection = createSelector(
  selectUser,
  selectCollectionState,
  (users, collection) => {
    return collection.map((id) => users.find((user) => user.id === id));
  }
);
