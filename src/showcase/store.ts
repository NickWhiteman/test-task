import createSagaMiddleware from "@redux-saga/core";
import {
  applyMiddleware,
  combineReducers,
  createStore
} from "@reduxjs/toolkit";

import { rootSaga } from "../root-saga";
import { ShowcaseReducer } from "./reducer";
import { IShowcaseState } from "./types";

export interface IRootState {
  ShowcaseStore: IShowcaseState
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    ShowcaseStore: ShowcaseReducer
  }),
  undefined,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;