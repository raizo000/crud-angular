import { createReducer, on } from '@ngrx/store';
import { removeUser } from './user.action';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeUser, (state, { userId }) => state.filter((id) => id !== userId))
);
