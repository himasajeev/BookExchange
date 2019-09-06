import { omit } from 'lodash';
import * as actionTypes from '../actionTypes';

const basketReducer = (state = {}, action) => {
  const { error, id } = action;
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...omit(state, ['error']),
        data: { ...state.data, ...action.book },
      };
    case actionTypes.REMOVE_FROM_BASKET:
      return omit(state, [`data.${id}`]);
    case actionTypes.ORDER_BASKET_REQUESTED:
      return { ...state, isLoading: true };
    case actionTypes.ORDER_BASKET_SUCCEEDED:
      return { ...state, isLoading: false };
    case actionTypes.ORDER_BASKET_FAILED:
      return { ...state, isLoading: false, error };
    default:
      return state;
  }
};

export default basketReducer;
