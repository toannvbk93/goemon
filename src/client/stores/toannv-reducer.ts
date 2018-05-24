import * as Redux from 'redux';
import { handleActions, Action } from 'redux-actions';
import assign = require('object-assign');
import * as Actions from '../actions/toannv-actions';

export type IState = {
  text: any;
  result: string;
};

export const initialState: IState = {
  text: '',
  result: 'Ask something'
};

const arrayAsks = ['what are you doing', 'how are you', 'what this mean', 'good morning'];
const arrayAnwsers = ['I am coding', 'I am fine thanks you', 'What do you want to ask?', 'good morning'];
const reducers: { [key: string]: (state, action: Action<any>) => IState } = {

  [Actions.ANWSER]: (state: IState, action) => {
    if (arrayAsks.indexOf(state.text) !== null) {
      return {
        text: action.text,
        result: state.result + arrayAnwsers[arrayAsks.indexOf(state.text)]
      };
    } else {
      return initialState;
    }
  }
};

export function reducer(state: IState = initialState, action: Action<any>): IState {
  if ( reducers[action.type] != undefined ) {
    return assign({}, state, reducers[action.type](state, action));
  }
  return state;
}
