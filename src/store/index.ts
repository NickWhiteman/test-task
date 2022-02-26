import { combineReducers, createStore } from 'redux';
import { IShowcaseState } from './types';
import { ShowcaseReducer } from './reducer';

export interface IRootState {
  ShowcaseStore: IShowcaseState;
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    ShowcaseStore: ShowcaseReducer,
  }),
  undefined,
);

export default store;