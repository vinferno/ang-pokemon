import { Action, createReducer, on } from '@ngrx/store';

interface User {
  id: number;
}
export const usersFeatureKey = 'users';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: [{id: 1}],
};

export const reducer = createReducer(
  initialState,

);
