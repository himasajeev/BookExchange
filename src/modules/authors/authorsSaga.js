import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchGetAuthors } from './authorsApi';
import * as actionTypes from '../actionTypes';
import { removeToken } from '../../utils/removeToken';
import {
  sessionError,
  sessionExpired,
} from '../../constants/sessionExpiredMessage';
import { isResponseWithArrayValid } from '../../utils/validateResponse';

export function* getAuthorsSaga({ token }) {
  try {
    const response = yield call(fetchGetAuthors, token);
    const data = response.result;
    if (isResponseWithArrayValid(data)) {
      yield put({ type: actionTypes.GET_AUTHORS_SUCCEEDED, data });
    } else {
      yield put({ type: actionTypes.GET_AUTHORS_FAILED, error: sessionError });
      removeToken();
      yield put({
        type: actionTypes.REMOVE_TOKEN,
      });
      toast.error(sessionExpired);
    }
  } catch (error) {
    yield put({ type: actionTypes.GET_AUTHORS_FAILED, error });
  }
}
