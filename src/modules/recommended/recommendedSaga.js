import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actionTypes from '../actionTypes';
import { isResponseWithArrayValid } from '../../utils/validateResponse';
import {
  sessionError,
  sessionExpired,
} from '../../constants/sessionExpiredMessage';
import { removeToken } from '../../utils/removeToken';
import {
  fetchGetRecommendedBuy,
  fetchGetRecommendedSell,
} from './recommendedApi';
import { isBuy, isSell } from '../../utils/phaseToBool';

export function* getRecommendedSaga({ token, phase }) {
  try {
    let response;
    switch (true) {
      case isSell(phase):
        response = yield call(fetchGetRecommendedSell, token);
        break;
      case isBuy(phase):
        response = yield call(fetchGetRecommendedBuy, token);
        break;
      default:
        break;
    }
    const data = response.result;

    if (isResponseWithArrayValid(data)) {
      yield put({ type: actionTypes.GET_RECOMMENDED_SUCCEEDED, data });
    } else {
      yield put({
        type: actionTypes.GET_RECOMMENDED_FAILED,
        error: sessionError,
      });
      removeToken();
      yield put({
        type: actionTypes.REMOVE_TOKEN,
      });
      toast.error(sessionExpired);
    }
  } catch (error) {
    yield put({ type: actionTypes.GET_RECOMMENDED_FAILED, error });
  }
}
