import { put, call } from 'redux-saga/effects';
import { fetchGetAuthors } from './authorsApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* getAuthorsSaga(token) {
  try {
    const authors = yield call(fetchGetAuthors, token);

    yield put({ type: actionTypes.GET_AUTHORS_SUCCEEDED, authors });
  } catch (error) {
    yield put({ type: actionTypes.GET_AUTHORS_FAILED, error });
  }
}
