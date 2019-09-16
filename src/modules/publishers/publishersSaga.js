import { put, call } from 'redux-saga/effects';
import { fetchGetPublishers } from './publishersApi';
import * as actionTypes from '../actionTypes';

export function* getPublishersSaga({ token }) {
  try {
    const response = yield call(fetchGetPublishers, token);
    const data = response.result;

    yield put({ type: actionTypes.GET_PUBLISHERS_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.GET_PUBLISHERS_FAILED, error });
  }
}
