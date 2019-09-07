import { omit } from 'lodash';
import * as actionTypes from '../actionTypes';

// const overviewReducer = (state = {}, action) => {
//   const {
//     overviewBuy,
//     overviewSell,
//     overviewToSell,
//     overviewToBuy,
//     error,
//   } = action;
//   switch (action.type) {
//     case actionTypes.GET_OVERVIEW_BUY_REQUESTED:
//     case actionTypes.GET_OVERVIEW_SELL_REQUESTED:
//     case actionTypes.GET_OVERVIEW_BOOKS_TO_SELL_REQUESTED:
//     case actionTypes.GET_OVERVIEW_BOOKS_TO_BUY_REQUESTED:
//       return {
//         ...omit(state, ['error']),
//         isLoading: true,
//       };
//     case actionTypes.GET_OVERVIEW_BUY_SUCCEEDED:
//       return {
//         ...state,
//         overviewBuy,
//         isLoading: false,
//       };
//     case actionTypes.GET_OVERVIEW_SELL_SUCCEEDED:
//       return {
//         ...state,
//         overviewSell,
//         isLoading: false,
//       };
//     case actionTypes.GET_OVERVIEW_BUY_FAILED:
//     case actionTypes.GET_OVERVIEW_SELL_FAILED:
//     case actionTypes.GET_OVERVIEW_BOOKS_TO_SELL_FAILED:
//     case actionTypes.GET_OVERVIEW_BOOKS_TO_BUY_FAILED:
//       return {
//         ...state,
//         isLoading: false,
//         error,
//       };
//     case actionTypes.GET_OVERVIEW_BOOKS_TO_SELL_SUCCEEDED:
//       return {
//         ...state,
//         overviewToSell,
//         isLoading: false,
//       };
//     case actionTypes.GET_OVERVIEW_BOOKS_TO_BUY_SUCCEEDED:
//       return {
//         ...state,
//         overviewToBuy,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// };

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
