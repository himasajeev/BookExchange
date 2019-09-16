import { put, call } from 'redux-saga/effects';
import { fetchGetAuthors } from './authorsApi';
import * as actionTypes from '../actionTypes';

export function* getAuthorsSaga({ token }) {
  try {
    const response = yield call(fetchGetAuthors, token);
    const data = response.result;

    yield put({ type: actionTypes.GET_AUTHORS_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.GET_AUTHORS_FAILED, error });
  }
}
