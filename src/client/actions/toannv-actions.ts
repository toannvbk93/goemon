import { createAction } from 'redux-actions';

export const ADD_NAME = 'ADD_NAME';

export const updateFetchStatus = createAction<string>(ADD_NAME);
