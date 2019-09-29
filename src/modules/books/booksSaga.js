import { put, call } from 'redux-saga/effects';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import {
  fetchGetBooksSell,
  fetchGetBooksBuy,
  fetchGetBooksSellSearch,
  fetchGetBooksBuySearch,
} from './booksApi';
import * as actionTypes from '../actionTypes';
import { isBuy, isSell } from '../../utils/phaseToBool';
import { isResponseWithArrayValid } from '../../utils/validateResponse';
import {
  sessionError,
  sessionExpired,
} from '../../constants/sessionExpiredMessage';
import { removeToken } from '../../utils/removeToken';

export function* getBooksSaga({ token, search, phase }) {
  try {
    let response;
    const isSearch = !isEmpty(search);
    switch (true) {
      case isSell(phase) && isSearch && search.search !== '':
        response = yield call(fetchGetBooksSellSearch, token, search);
        break;
      case isSell(phase):
        response = yield call(fetchGetBooksSell, token);
        break;
      case isBuy(phase) && isSearch && search.search !== '':
        response = yield call(fetchGetBooksBuySearch, token, search);
        break;
      case isBuy(phase):
        response = yield call(fetchGetBooksBuy, token);
        break;
      default:
        yield put({ type: actionTypes.GET_BOOKS_FAILED, error: 'error' });
    }
    const data = response.result;

    if (isResponseWithArrayValid(data)) {
      yield put({ type: actionTypes.GET_BOOKS_SUCCEEDED, data });
    } else {
      yield put({ type: actionTypes.GET_BOOKS_FAILED, error: sessionError });
      removeToken();
      yield put({
        type: actionTypes.REMOVE_TOKEN,
      });
      toast.error(sessionExpired);
    }
  } catch (error) {
    yield put({ type: actionTypes.GET_BOOKS_FAILED, error });
  }
}
