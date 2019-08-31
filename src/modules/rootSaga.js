import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

import { getBooksSaga } from './books/booksSaga';

// eslint-disable-next-line import/prefer-default-export
export function* rootSaga() {
  yield all([yield takeEvery(actionTypes.GET_BOOKS_REQUESTED, getBooksSaga)]);
}
