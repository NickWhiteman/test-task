import { all } from 'redux-saga/effects';
import { watchersShowcase } from './saga/sagaWatchers';

export function* rootSaga() {
  yield all([
    watchersShowcase
  ]);
}