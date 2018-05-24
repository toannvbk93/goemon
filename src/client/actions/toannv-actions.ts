import { createAction } from 'redux-actions';

export const ANWSER = 'ANWSER';

export const answser = createAction<string>(ANWSER);
