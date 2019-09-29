import * as actionTypes from '../actionTypes';

const recommendedReducer = (state = {}, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.GET_RECOMMENDED_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_RECOMMENDED_SUCCEEDED:
      return {
        data,
        isLoading: false,
      };
    case actionTypes.GET_RECOMMENDED_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default recommendedReducer;
