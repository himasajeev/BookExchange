import { put, call } from 'redux-saga/effects';
import { isEmpty } from 'lodash';
import {
  fetchGetBooksSell,
  fetchGetBooksBuy,
  fetchGetBooksSellSearch,
  fetchGetBooksBuySearch,
} from './booksApi';
import * as actionTypes from '../actionTypes';
import { isBuy, isSell } from '../../utils/phaseToBool';

// eslint-disable-next-line import/prefer-default-export
export function* getBooksSaga({ token, search, phase }) {
  try {
    let response;
    const isSearch = !isEmpty(search);

    switch (true) {
      case isSell(phase) && isSearch:
        response = yield call(fetchGetBooksSellSearch, token, search);
        break;
      case isSell(phase):
        response = yield call(fetchGetBooksSell, token);
        break;
      case isBuy(phase) && isSearch:
        response = yield call(fetchGetBooksBuySearch, token, search);
        break;
      case isBuy(phase):
        response = yield call(fetchGetBooksBuy, token);
        break;
      default:
        yield put({ type: actionTypes.GET_BOOKS_FAILED, error: 'error' });
    }

    const data = response.result;

    yield put({ type: actionTypes.GET_BOOKS_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.GET_BOOKS_FAILED, error });
  }
}
