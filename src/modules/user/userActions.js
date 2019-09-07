import * as actionTypes from '../actionTypes';

export const loginUser = user => ({
  type: actionTypes.LOGIN_USER_REQUESTED,
  user,
});

export const registerUser = user => ({
  type: actionTypes.REGISTER_USER_REQUESTED,
  user,
});

export const getUserInfo = token => ({
  type: actionTypes.GET_USER_INFO_REQUESTED,
  token,
});
