import { createStore, combineReducers, applyMiddleware } from 'redux';
let promiseMiddleware = require('redux-promise');

import * as ProfileReducer  from './profile-reducer';

export const rootReducer = combineReducers({
  profileState : ProfileReducer.reducer
});

export type IStore = {
  profileState: ProfileReducer.IState
};

export const InitialState: IStore = {
  profileState : ProfileReducer.initialState
};

export const configureStore = (initialState: IStore = InitialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(promiseMiddleware));
};
