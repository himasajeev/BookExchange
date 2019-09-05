import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

import { getBooksSaga } from './books/booksSaga';
import { registerUserSaga, loginUserSaga } from './user/userSaga';

// eslint-disable-next-line import/prefer-default-export
export function* rootSaga() {
  yield all([
    yield takeEvery(actionTypes.GET_BOOKS_REQUESTED, getBooksSaga),
    yield takeEvery(actionTypes.LOGIN_USER_REQUESTED, loginUserSaga),
    yield takeEvery(actionTypes.REGISTER_USER_REQUESTED, registerUserSaga),
  ]);
}
