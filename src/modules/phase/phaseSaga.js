import { put, call } from 'redux-saga/effects';
import { fetchGetPhase } from './phaseApi';
import * as actionTypes from '../actionTypes';

export function* getPhaseSaga({ token }) {
  try {
    const response = yield call(fetchGetPhase, token);

    const [value] = response.result;

    const phase = { value: Number(value.value) };
    // console.log(phase);
    // const phase = { value: 4 };
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
