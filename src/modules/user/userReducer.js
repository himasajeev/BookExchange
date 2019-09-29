import * as actionTypes from '../actionTypes';

const userReducer = (state = {}, action) => {
  const { token, error, userInfo } = action;

  switch (action.type) {
    case actionTypes.LOGIN_USER_REQUESTED:
    case actionTypes.REGISTER_USER_REQUESTED:
      return { ...state, isLoading: true };
    case actionTypes.LOGIN_USER_SUCCEEDED:
    case actionTypes.REGISTER_USER_SUCCEEDED:
    case actionTypes.SET_USER_TOKEN_SUCCEEDED:
      return { ...state, token, isLoading: false };
    case actionTypes.REGISTER_USER_FAILED:
    case actionTypes.LOGIN_USER_FAILED:
    case actionTypes.SET_USER_TOKEN_FAILED:
      return { ...state, isLoading: false, error };
    case actionTypes.LOGOUT_USER_SUCCEEDED:
    case actionTypes.REMOVE_TOKEN:
      return {};
    case actionTypes.GET_USER_INFO_SUCCEEDED:
      return { ...state, userInfo };
    default:
      return state;
  }
};

export default userReducer;
