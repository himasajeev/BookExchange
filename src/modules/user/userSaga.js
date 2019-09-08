/* eslint-disable camelcase */
import { put, call } from 'redux-saga/effects';
import {
  fetchRegisterUser,
  fetchLoginUser,
  fetchGetUserInfo,
  fetchLogoutUser,
} from './userApi';
import * as actionTypes from '../actionTypes';
import { USER_ERROR_TYPES } from '../../constants/userErrorTypes';

export function* loginUserSaga({ user }) {
  try {
    const response = yield call(fetchLoginUser, user);
    const { message, token } = response.result;
    const operationSuccessful = response.result.operation_successful;

    if (operationSuccessful) {
      window.localStorage.setItem('token', token);
      yield put({ type: actionTypes.LOGIN_USER_SUCCEEDED, token });
      yield put({ type: actionTypes.GET_PHASE_REQUESTED, token });
    } else {
      yield put({
        type: actionTypes.LOGIN_USER_FAILED,
        error: { type: USER_ERROR_TYPES.LOGIN, message },
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.LOGIN_USER_FAILED,
      error: { type: USER_ERROR_TYPES.LOGIN, error },
    });
  }
}

export function* registerUserSaga({ user }) {
  try {
    const response = yield call(fetchRegisterUser, user);

    const { message, token } = response.result;
    const { operation_successful } = response.result;

    if (operation_successful) {
      window.localStorage.setItem('token', token);
      yield put({ type: actionTypes.REGISTER_USER_SUCCEEDED, token });
      yield put({ type: actionTypes.GET_PHASE_REQUESTED, token });
    } else {
      yield put({
        type: actionTypes.REGISTER_USER_FAILED,
        error: { type: USER_ERROR_TYPES.REGISTER, message },
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.REGISTER_USER_FAILED,
      error: { type: USER_ERROR_TYPES.REGISTER, error },
    });
  }
}

export function* getUserInfoSaga({ token }) {
  try {
    const response = yield call(fetchGetUserInfo, token);

    const [userInfo] = response.result;

    yield put({
      type: actionTypes.GET_USER_INFO_SUCCEEDED,
      userInfo,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_USER_INFO_FAILED,
    });
  }
}

export function* logoutUserSaga(token) {
  try {
    const response = yield call(fetchLogoutUser, token);
    window.localStorage.removeItem('token');

    yield put({
      type: actionTypes.LOGOUT_USER_SUCCEEDED,
    });
  } catch (error) {
    yield put({ type: actionTypes.LOGOUT_USER_FAILED });
  }
}

export function* setUserTokenSaga({ token }) {
  try {
    yield put({
      type: actionTypes.SET_USER_TOKEN_SUCCEEDED,
      token,
    });
    yield put({ type: actionTypes.GET_PHASE_REQUESTED, token });
  } catch (error) {
    yield put({
      type: actionTypes.SET_USER_TOKEN_FAILED,
      error,
    });
  }
}
