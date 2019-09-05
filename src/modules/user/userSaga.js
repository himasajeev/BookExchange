import { put, call } from 'redux-saga/effects';
import { fetchRegisterUser, fetchLoginUser } from './userApi';
import * as actionTypes from '../actionTypes';

export function* loginUserSaga({ user }) {
  try {
    const data = yield call(fetchLoginUser, user);
    yield put({ type: actionTypes.LOGIN_USER_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_USER_FAILED, error });
  }
}

export function* registerUserSaga({ user }) {
  try {
    const data = yield call(fetchRegisterUser, user);

    window.localStorage.setItem('token', data);
    yield put({ type: actionTypes.REGISTER_USER_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.REGISTER_USER_FAILED, error });
  }
}
