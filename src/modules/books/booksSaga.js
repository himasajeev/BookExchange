import { put, call } from 'redux-saga/effects';
import { fetchGetBooks, fetchGetBooksSearch } from './booksApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* getBooksSaga({ token }) {
  try {
    const response = yield call(fetchGetBooks, token);
    const data = response.result;

    yield put({ type: actionTypes.GET_BOOKS_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.GET_BOOKS_FAILED, error });
  }
}

export function* getBooksSearchSaga({ token, search }) {
  try {
    const response = yield call(fetchGetBooksSearch, token, search);
    const data = response.result;

    yield put({ type: actionTypes.GET_BOOKS_SEARCH_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.GET_BOOKS_SEARCH_FAILED, error });
  }
}
