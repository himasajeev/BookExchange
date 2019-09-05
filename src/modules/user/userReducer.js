import * as actionTypes from '../actionTypes';

const userReducer = (state = {}, action) => {
  const { data, error } = action;

  switch (action.type) {
    case actionTypes.LOGIN_USER_REQUESTED:
    case actionTypes.REGISTER_USER_REQUESTED:
      return { ...state, isLoading: true };
    case actionTypes.LOGIN_USER_SUCCEEDED:
    case actionTypes.REGISTER_USER_SUCCEEDED:
      return { ...state, ...data, isLoading: false };
    case actionTypes.REGISTER_USER_FAILED:
    case actionTypes.LOGIN_USER_FAILED:
      return { ...state, isLoading: false, error };
    case actionTypes.LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
