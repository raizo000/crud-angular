import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey } from './user.reducer';
import { UserState } from './user.state';

export const selectUserFeatures =
  createFeatureSelector<UserState>(userFeatureKey);

export const selectUsers = createSelector(
  selectUserFeatures,
  (state: UserState) => state.users
);

export const selectUserDetail = createSelector(
  selectUserFeatures,
  (state: UserState) => state.userDetail
);
