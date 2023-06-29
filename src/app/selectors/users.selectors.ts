import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from '../reducers/users.reducer';

const usersFeature = createFeatureSelector<fromUsers.State>(fromUsers.usersFeatureKey);

export const selectUsers = createSelector(
  usersFeature,
  (state: fromUsers.State) => state.users
);

