import { put, call } from 'redux-saga/effects';
import { fetchRegisterBookBuy, fetchRegisterBookSell } from './basketApi';
import * as actionTypes from '../actionTypes';
import { isSell, isBuy } from '../../utils/phaseToBool';

// eslint-disable-next-line import/prefer-default-export
export function* orderBasketSaga({ basket, phase, token }) {
  try {
    // TODO
    if (isSell(phase)) {
      const response = yield call(fetchRegisterBookSell, basket, token);

      yield put({ type: actionTypes.ORDER_BASKET_SUCCEEDED, response });
    }

    if (isBuy(phase)) {
      const response = yield call(fetchRegisterBookBuy, basket, token);

      yield put({ type: actionTypes.ORDER_BASKET_SUCCEEDED, response });
    }
  } catch (error) {
    yield put({ type: actionTypes.ORDER_BASKET_FAILED, error });
  }
}
