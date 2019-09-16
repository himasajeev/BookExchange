import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

import { getBooksSaga } from './books/booksSaga';
import { getAuthorsSaga } from './authors/authorsSaga';
import { getCategoriesSaga } from './categories/categoriesSaga';
import { getPublishersSaga } from './publishers/publishersSaga';
import { overviewSaga } from './overview/overviewSaga';
import {
  registerUserSaga,
  loginUserSaga,
  getUserInfoSaga,
  logoutUserSaga,
  setUserTokenSaga,
} from './user/userSaga';
import { getPhaseSaga } from './phase/phaseSaga';
import { orderBasketSaga } from './basket/basketSaga';

export function* rootSaga() {
  yield all([
    yield takeEvery(actionTypes.GET_BOOKS_REQUESTED, getBooksSaga),
    yield takeEvery(actionTypes.GET_CATEGORIES_REQUESTED, getCategoriesSaga),
    yield takeEvery(actionTypes.GET_AUTHORS_REQUESTED, getAuthorsSaga),
    yield takeEvery(actionTypes.GET_PUBLISHERS_REQUESTED, getPublishersSaga),
    yield takeEvery(actionTypes.LOGIN_USER_REQUESTED, loginUserSaga),
    yield takeEvery(actionTypes.REGISTER_USER_REQUESTED, registerUserSaga),
    yield takeEvery(actionTypes.GET_USER_INFO_REQUESTED, getUserInfoSaga),
    yield takeEvery(actionTypes.LOGOUT_USER_REQUESTED, logoutUserSaga),
    yield takeEvery(actionTypes.GET_OVERVIEW_REQUESTED, overviewSaga),
    yield takeEvery(actionTypes.GET_PHASE_REQUESTED, getPhaseSaga),
    yield takeEvery(actionTypes.SET_USER_TOKEN_REQUESTED, setUserTokenSaga),
    yield takeEvery(actionTypes.ORDER_BASKET_REQUESTED, orderBasketSaga),
  ]);
}
