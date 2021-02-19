import { combineReducers } from 'redux';
import { user } from './userReducer';

export const Reducers = combineReducers({
  user,
});

export type RootState = ReturnType<typeof Reducers>;
