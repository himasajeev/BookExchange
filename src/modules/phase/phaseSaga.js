import { put, call } from 'redux-saga/effects';
import { fetchGetPhase } from './phaseApi';
import * as actionTypes from '../actionTypes';

export function* getPhaseSaga({ token }) {
  try {
    const response = yield call(fetchGetPhase, token);

    // const [phase] = response.result;
    const phase = { value: 3 };
    yield put({
      type: actionTypes.GET_PHASE_SUCCEEDED,
      phase,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_PHASE_FAILED,
    });
  }
}
