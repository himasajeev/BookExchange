// import overviewReducer from './overviewReducer';
// import * as actionTypes from '../actionTypes';

// describe('Overview Reducer', () => {
//   it('has a default state', () => {
//     const state = undefined;
//     const action = { type: '' };

//     const defaultState = {};

//     const result = overviewReducer(state, action);
//     expect(result).toEqual(defaultState);
//   });

//   it('can handle default action type', () => {
//     const state = {
//       email: 'gurgul@wp.pl',
//       token: 'abcd',
//       isLoading: false,
//     };

//     const action = { type: '' };
//     const result = overviewReducer(state, action);
//     expect(result).toEqual(state);
//   });

//   it('can handle GET_OVERVIEW_BUY_REQUESTED, GET_OVERVIEW_SELL_REQUESTED action type, and change isLoading to true', () => {
//     const state = {
//       overviewBuy: 'test',
//       error: 'error',
//     };

//     const expected = {
//       overviewBuy: 'test',
//       isLoading: true,
//     };

//     const action = { type: actionTypes.GET_OVERVIEW_BUY_REQUESTED };
//     const result = overviewReducer(state, action);
//     expect(result).toEqual(expected);
//   });

//   it('can handle GET_OVERVIEW_BUY_SUCCEEDED, action type, replace old data with new and set isLoading to false', () => {
//     const state = {
//       overviewBuy: {
//         data: 'old Data',
//       },
//       isLoading: true,
//     };

//     const overviewBuy = { test: 'test' };

//     const expected = {
//       overviewBuy: { test: 'test' },
//       isLoading: false,
//     };

//     const action = {
//       type: actionTypes.GET_OVERVIEW_BUY_SUCCEEDED,
//       overviewBuy,
//     };
//     const result = overviewReducer(state, action);
//     expect(result).toEqual(expected);
//   });
//   it('can handle GET_OVERVIEW_BUY_SUCCEEDED, GET_OVERVIEW_SELL_SUCCEEDED action type, replace old data with new and set isLoading to false', () => {
//     const state = {
//       overviewBuy: {
//         data: 'old Data',
//       },
//       overviewSell: {
//         data: 'overviewSell',
//       },
//       isLoading: true,
//     };

//     const overviewBuy = { test: 'test' };

//     const expected = {
//       overviewBuy: { test: 'test' },
//       overviewSell: {
//         data: 'overviewSell',
//       },
//       isLoading: false,
//     };

//     const action = {
//       type: actionTypes.GET_OVERVIEW_BUY_SUCCEEDED,
//       overviewBuy,
//     };
//     const result = overviewReducer(state, action);
//     expect(result).toEqual(expected);
//   });

//   it('can handle GET_OVERVIEW_BUY_FAILED, GET_OVERVIEW_SELL_FAILED action type, replace old data with new and set isLoading to false', () => {
//     const state = {
//       isLoading: true,
//     };
//     const error = 'error';

//     const expected = { isLoading: false, error };

//     const action = { type: actionTypes.GET_OVERVIEW_BUY_FAILED, error };
//     const result = overviewReducer(state, action);
//     expect(result).toEqual(expected);
//   });
// });
