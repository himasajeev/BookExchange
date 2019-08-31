import { put, call } from 'redux-saga/effects';
import { fetchGetBooks } from './booksApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* getBooksSaga() {
  try {
    const books = yield call(fetchGetBooks);
    yield put({ type: actionTypes.GET_BOOKS_SUCCEEDED, books });
  } catch (error) {
    yield put({ type: actionTypes.GET_BOOKS_FAILED, error });
  }
}
