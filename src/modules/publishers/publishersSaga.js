import { put, call } from 'redux-saga/effects';
import { fetchGetPublishers } from './publishersApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* getPublishersSaga(token) {
  try {
    const publishers = yield call(fetchGetPublishers, token);

    yield put({ type: actionTypes.GET_PUBLISHERS_SUCCEEDED, publishers });
  } catch (error) {
    yield put({ type: actionTypes.GET_PUBLISHERS_FAILED, error });
  }
}
