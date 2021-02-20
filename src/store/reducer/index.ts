import { combineReducers } from 'redux';
import { user } from './userReducer';
import { historic } from './historicReducer';

export const Reducers = combineReducers({
  user,
  historic,
});

export type RootState = ReturnType<typeof Reducers>;
