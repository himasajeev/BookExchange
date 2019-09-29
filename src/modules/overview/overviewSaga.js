import { all, put, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import {
  fetchGetOverviewBuy,
  fetchGetOverviewSell,
  fetchGetOverviewBooksToSell,
  fetchGetOverviewBooksToBuy,
  fetchGetPayments,
} from './overviewApi';
import * as actionTypes from '../actionTypes';
import { isResponseWithArrayValid } from '../../utils/validateResponse';
import {
  sessionError,
  sessionExpired,
} from '../../constants/sessionExpiredMessage';
import { removeToken } from '../../utils/removeToken';

export function* overviewSaga({ token }) {
  try {
    const [
      booksToBuyResult,
      booksToSellResult,
      sellResult,
      buyResult,
      paymentsResult,
    ] = yield all([
      call(fetchGetOverviewBooksToBuy, token),
      call(fetchGetOverviewBooksToSell, token),
      call(fetchGetOverviewSell, token),
      call(fetchGetOverviewBuy, token),
      call(fetchGetPayments, token),
    ]);
    const booksToBuy = booksToBuyResult.result;
    const booksToSell = booksToSellResult.result;
    const payments = paymentsResult.result;
    const [sell] = sellResult.result;
    const [buy] = buyResult.result;

    const dataArray = [
      booksToBuy,
      booksToSell,
      sellResult.result,
      buyResult.result,
      payments,
    ];

    const isDataArrayValid = dataArray.every(data =>
      isResponseWithArrayValid(data),
    );

    if (isDataArrayValid) {
      yield put({
        type: actionTypes.GET_OVERVIEW_SUCCEEDED,
        booksToBuy,
        booksToSell,
        sell,
        buy,
        payments,
      });
    } else {
      yield put({ type: actionTypes.GET_OVERVIEW_FAILED, error: sessionError });
      yield put({
        type: actionTypes.REMOVE_TOKEN,
      });
      removeToken();
      toast.error(sessionExpired);
    }
  } catch (error) {
    yield put({ type: actionTypes.GET_OVERVIEW_FAILED, error });
  }
}
