import { put, call } from 'redux-saga/effects';
import { fetchRegisterBookBuy, fetchRegisterBookSell } from './basketApi';
import * as actionTypes from '../actionTypes';
import { isSell, isBuy } from '../../utils/phaseToBool';

export function* orderBasketSaga({ basket, phase, token, history }) {
  try {
    if (isSell(phase)) {
      const response = yield call(fetchRegisterBookSell, basket, token);

      yield put({ type: actionTypes.ORDER_BASKET_SUCCEEDED, response });

      history.push('/overview');
    }

    if (isBuy(phase)) {
      const response = yield call(fetchRegisterBookBuy, basket, token);
      yield put({ type: actionTypes.ORDER_BASKET_SUCCEEDED, response });

      history.push('/overview');
    }
  } catch (error) {
    yield put({ type: actionTypes.ORDER_BASKET_FAILED, error });
  }
}
