import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromUsers from './users.reducer';


import { environment } from '../../environments/environment';


export interface State {
  [fromUsers.usersFeatureKey]: fromUsers.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromUsers.usersFeatureKey]: fromUsers.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
