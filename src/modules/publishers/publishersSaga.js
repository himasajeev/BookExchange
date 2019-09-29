import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchGetPublishers } from './publishersApi';
import * as actionTypes from '../actionTypes';
import { isResponseWithArrayValid } from '../../utils/validateResponse';
import {
  sessionError,
  sessionExpired,
} from '../../constants/sessionExpiredMessage';
import { removeToken } from '../../utils/removeToken';

export function* getPublishersSaga({ token }) {
  try {
    const response = yield call(fetchGetPublishers, token);
    const data = response.result;

    if (isResponseWithArrayValid(data)) {
      yield put({ type: actionTypes.GET_PUBLISHERS_SUCCEEDED, data });
    } else {
      yield put({
        type: actionTypes.GET_PUBLISHERS_FAILED,
        error: sessionError,
      });
      removeToken();
      yield put({
        type: actionTypes.REMOVE_TOKEN,
      });
      toast.error(sessionExpired);
    }
  } catch (error) {
    yield put({ type: actionTypes.GET_PUBLISHERS_FAILED, error });
  }
}
