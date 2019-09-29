import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchGetPhase } from './phaseApi';
import * as actionTypes from '../actionTypes';
import { isResponseWithArrayValid } from '../../utils/validateResponse';
import {
  sessionError,
  sessionExpired,
} from '../../constants/sessionExpiredMessage';
import { removeToken } from '../../utils/removeToken';

export function* getPhaseSaga({ token }) {
  try {
    const response = yield call(fetchGetPhase, token);

    const [value] = response.result;

    const phase = { value: Number(value.value) };

    if (isResponseWithArrayValid(response.result)) {
      yield put({
        type: actionTypes.GET_PHASE_SUCCEEDED,
        phase,
      });
    } else {
      yield put({
        type: actionTypes.GET_PHASE_FAILED,
        error: sessionError,
      });
      yield put({
        type: actionTypes.REMOVE_TOKEN,
      });
      removeToken();
      toast.error(sessionExpired);
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_PHASE_FAILED,
      error,
    });
  }
}
