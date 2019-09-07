import * as actionTypes from '../actionTypes';

const publishersReducer = (state = {}, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.GET_PUBLISHERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_PUBLISHERS_SUCCEEDED:
      return {
        data,
        isLoading: false,
      };
    case actionTypes.GET_PUBLISHERS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default publishersReducer;
