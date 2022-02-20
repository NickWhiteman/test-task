import { takeEvery } from 'redux-saga/effects';
import { getData } from './saga';

import { ShowcaseAction } from './sagaActions';

export function* watchersShowcase() {
  yield takeEvery(
    ShowcaseAction.getData.type,
    getData
  )
}