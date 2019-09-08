import { omit } from 'lodash';
import * as actionTypes from '../actionTypes';

const overviewReducer = (state = {}, action) => {
  const { booksToBuy, booksToSell, sell, buy, error } = action;
  switch (action.type) {
    case actionTypes.GET_OVERVIEW_REQUESTED:
      return {
        ...omit(state, ['error']),
        isLoading: true,
      };
    case actionTypes.GET_OVERVIEW_SUCCEEDED:
      return {
        ...state,
        booksToBuy,
        booksToSell,
        sell,
        buy,
        isLoading: false,
      };
    case actionTypes.GET_OVERVIEW_FAILED:
      return { error, isLoading: true };
    default:
      return state;
  }
};

export default overviewReducer;
