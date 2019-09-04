import { put, call } from 'redux-saga/effects';
import { testFetchGetBooks } from './booksApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* getBooksSaga() {
  try {
    const data = yield call(testFetchGetBooks);

    yield put({ type: actionTypes.GET_BOOKS_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.GET_BOOKS_FAILED, error });
  }
}
