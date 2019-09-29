/* eslint-disable camelcase */
import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  fetchRegisterUser,
  fetchLoginUser,
  fetchGetUserInfo,
  fetchLogoutUser,
} from './userApi';
import * as actionTypes from '../actionTypes';
import { USER_ERROR_TYPES } from '../../constants/userErrorTypes';
import { removeToken } from '../../utils/removeToken';

export function* loginUserSaga({ user }) {
  try {
    const response = yield call(fetchLoginUser, user);
    const { message, token } = response.result;
    const operationSuccessful = response.result.operation_successful;

    if (operationSuccessful) {
      window.localStorage.setItem('token', token);
      yield put({ type: actionTypes.LOGIN_USER_SUCCEEDED, token });
      yield put({ type: actionTypes.LOAD_INITIAL_DATA, token });
    } else {
      yield put({
        type: actionTypes.LOGIN_USER_FAILED,
        error: { type: USER_ERROR_TYPES.LOGIN, message },
      });
      toast.error(message);
    }
  } catch (error) {
    yield put({
      type: actionTypes.LOGIN_USER_FAILED,
      error: { type: USER_ERROR_TYPES.LOGIN, error },
    });
  }
}

const errorMessage = 'Konto o podanym emailu już istnieje.';

export function* registerUserSaga({ user }) {
  try {
    const response = yield call(fetchRegisterUser, user);
    const { token } = response.result;
    const { operation_successful } = response.result;

    if (operation_successful) {
      window.localStorage.setItem('token', token);
      yield put({ type: actionTypes.REGISTER_USER_SUCCEEDED, token });
      yield put({ type: actionTypes.LOAD_INITIAL_DATA, token });
    } else {
      yield put({
        type: actionTypes.REGISTER_USER_FAILED,
        error: { type: USER_ERROR_TYPES.REGISTER, message: errorMessage },
      });
      toast.error(errorMessage);
    }
  } catch (error) {
    yield put({
      type: actionTypes.REGISTER_USER_FAILED,
      error: { type: USER_ERROR_TYPES.REGISTER, message: errorMessage },
    });
    toast.error(errorMessage);
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
    yield call(fetchLogoutUser, token);
    removeToken();
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
    if (token) yield put({ type: actionTypes.LOAD_INITIAL_DATA, token });
  } catch (error) {
    yield put({
      type: actionTypes.SET_USER_TOKEN_FAILED,
      error,
    });
  }
}
