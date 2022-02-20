import { call } from '@redux-saga/core/effects';

import { ShowcaseActions } from '../showcase/reducer';
import { Data } from '../showcase/types';
import { apiGetData } from '../service/api';
import { put } from 'redux-saga/effects';

export function* getData() {
  try {
    const data: Data[] = yield call( apiGetData );
    yield put( ShowcaseActions.getData(data) );
  } catch (e) {
    console.log(e)
  }
}