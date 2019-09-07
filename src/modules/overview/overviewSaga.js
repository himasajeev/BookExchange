import { all, put, call } from 'redux-saga/effects';

import {
  fetchGetOverviewBuy,
  fetchGetOverviewSell,
  fetchGetOverviewBooksToSell,
  fetchGetOverviewBooksToBuy,
} from './overviewApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
// export function* getOverviewSellSaga({ token }) {
//   try {
//     const overviewSell = yield call(fetchGetOverviewSell, token);

//     yield put({ type: actionTypes.GET_OVERVIEW_SELL_SUCCEEDED, overviewSell });
//   } catch (error) {
//     yield put({ type: actionTypes.GET_OVERVIEW_SELL_FAILED, error });
//   }
// }

// export function* getOverviewBuySaga({ token }) {
//   try {
//     const overviewBuy = yield call(fetchGetOverviewBuy, token);

//     yield put({ type: actionTypes.GET_OVERVIEW_BUY_SUCCEEDED, overviewBuy });
//   } catch (error) {
//     yield put({ type: actionTypes.GET_OVERVIEW_BUY_FAILED, error });
//   }
// }

// export function* getOverviewBooksToSellSaga({ token }) {
//   try {
//     const overviewBuy = yield call(fetchGetOverviewBooksToSell, token);

//     yield put({
//       type: actionTypes.GET_OVERVIEW_BOOKS_TO_SELL_SUCCEEDED,
//       overviewBuy,
//     });
//   } catch (error) {
//     yield put({
//       type: actionTypes.GET_OVERVIEW_BOOKS_TO_SELL_SUCCEEDED,
//       error,
//     });
//   }
// }

// export function* getOverviewBooksToBuySaga({ token }) {
//   try {
//     const overviewBuy = yield call(fetchGetOverviewBooksToBuy, token);

//     yield put({
//       type: actionTypes.GET_OVERVIEW_BOOKS_TO_BUY_SUCCEEDED,
//       overviewBuy,
//     });
//   } catch (error) {
//     yield put({ type: actionTypes.GET_OVERVIEW_BOOKS_TO_BUY_SUCCEEDED, error });
//   }
// }

// eslint-disable-next-line import/prefer-default-export
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
