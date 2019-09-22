import { all, put } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';

export function* loadInitialDataSaga({ token }) {
  yield all([
    put({ type: actionTypes.GET_PHASE_REQUESTED, token }),
    put({ type: actionTypes.GET_AUTHORS_REQUESTED, token }),
    put({ type: actionTypes.GET_CATEGORIES_REQUESTED, token }),
    put({ type: actionTypes.GET_PUBLISHERS_REQUESTED, token }),
  ]);
}
