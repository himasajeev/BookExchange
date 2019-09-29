import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchGetCategories } from './categoriesApi';
import * as actionTypes from '../actionTypes';
import { isResponseWithArrayValid } from '../../utils/validateResponse';
import {
  sessionError,
  sessionExpired,
} from '../../constants/sessionExpiredMessage';
import { removeToken } from '../../utils/removeToken';

export function* getCategoriesSaga({ token }) {
  try {
    const response = yield call(fetchGetCategories, token);

    const data = response.result;

    if (isResponseWithArrayValid(data)) {
      yield put({ type: actionTypes.GET_CATEGORIES_SUCCEEDED, data });
    } else {
      yield put({
        type: actionTypes.GET_CATEGORIES_FAILED,
        error: sessionError,
      });
      yield put({
        type: actionTypes.REMOVE_TOKEN,
      });
      removeToken();
      toast.error(sessionExpired);
    }
  } catch (error) {
    yield put({ type: actionTypes.GET_CATEGORIES_FAILED, error });
  }
}
