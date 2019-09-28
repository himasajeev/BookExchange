import { put, call } from 'redux-saga/effects';
import { fetchGetPhase } from './phaseApi';
import * as actionTypes from '../actionTypes';

export function* getPhaseSaga({ token }) {
  try {
    const response = yield call(fetchGetPhase, token);

    const [value] = response.result;

    const phase = { value: Number(value.value) };
    // const phase = { value: 2 };
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
