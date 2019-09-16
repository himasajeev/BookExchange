import { all, put, call } from 'redux-saga/effects';

import {
  fetchGetOverviewBuy,
  fetchGetOverviewSell,
  fetchGetOverviewBooksToSell,
  fetchGetOverviewBooksToBuy,
} from './overviewApi';
import * as actionTypes from '../actionTypes';

export function* overviewSaga({ token }) {
  try {
    const [
      booksToBuyResult,
      booksToSellResult,
      sellResult,
      buyResult,
    ] = yield all([
      call(fetchGetOverviewBooksToBuy, token),
      call(fetchGetOverviewBooksToSell, token),
      call(fetchGetOverviewSell, token),
      call(fetchGetOverviewBuy, token),
    ]);
    const booksToBuy = booksToBuyResult.result;
    const booksToSell = booksToSellResult.result;
    const [sell] = sellResult.result;
    const [buy] = buyResult.result;

    yield put({
      type: actionTypes.GET_OVERVIEW_SUCCEEDED,
      booksToBuy,
      booksToSell,
      sell,
      buy,
    });
  } catch (error) {
    yield put({ type: actionTypes.GET_OVERVIEW_FAILED, error });
  }
}
