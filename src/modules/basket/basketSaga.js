import { put, call } from 'redux-saga/effects';
import { fetchOrderBasket } from './basketApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* orderBasketSaga(basket) {
  try {
    const orderArray = Object.keys(basket).map(key => {
      return { id: basket[key].id, state: basket[key].state };
    });

    const response = yield call(fetchOrderBasket, orderArray);

    yield put({ type: actionTypes.ORDER_BASKET_SUCCEEDED, response });
  } catch (error) {
    yield put({ type: actionTypes.ORDER_BASKET_FAILED, error });
  }
}
