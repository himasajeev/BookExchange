import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchRegisterBookBuy, fetchRegisterBookSell } from './basketApi';
import * as actionTypes from '../actionTypes';
import { isSell, isBuy } from '../../utils/phaseToBool';
import { PAY_SELECT_VALUES } from '../../constants/paySelectValues';
import {
  fetchAddRecommendedBuy,
  fetchAddRecommendedSell,
} from '../recommended/recommendedApi';
import { createBasketBook } from '../../utils/createBasketBook';

export function* orderBasketSaga({
  basket,
  phase,
  token,
  history,
  paySelectValue,
}) {
  try {
    if (isSell(phase)) {
      const response = yield call(fetchRegisterBookSell, basket, token);

      yield put({ type: actionTypes.ORDER_BASKET_SUCCEEDED, response });
      toast.success('Zarejestrowano sprzedaż.');
      history.push('/overview');
    }

    if (isBuy(phase) && paySelectValue) {
      const response = yield call(fetchRegisterBookBuy, basket, token);
      yield put({ type: actionTypes.ORDER_BASKET_SUCCEEDED, response });

      switch (paySelectValue) {
        case PAY_SELECT_VALUES.WIRE_TRANSFER:
          window.location.replace(`https://secure.wpiauj.pl/?token=${token}`);
          break;
        case PAY_SELECT_VALUES.AT_LOCATION:
          history.push('/overview');
          toast.success('Zamówienie złożone.');
          break;
        default:
          break;
      }
    } else if (isBuy(phase)) toast.error('Wybierz rodzaj płatności.');
  } catch (error) {
    yield put({ type: actionTypes.ORDER_BASKET_FAILED, error });
  }
}

export function* addToBasketSaga({ book, token, phase }) {
  try {
    const bookId = book.id;
    yield put({
      type: actionTypes.ADD_TO_BASKET_SUCCEEDED,
      book: createBasketBook(book),
    });
    toast.success(`Dodano "${book.title}" do koszyka.`);

    if (isSell(phase)) yield call(fetchAddRecommendedSell, token, bookId);
    else if (isBuy(phase)) yield call(fetchAddRecommendedBuy, token, bookId);
  } catch (error) {
    toast.error('Nie udało się dodać do koszyka.');
  }
}
