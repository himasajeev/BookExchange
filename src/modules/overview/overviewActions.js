import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const getOverview = token => ({
  type: actionTypes.GET_OVERVIEW_REQUESTED,
  token,
});
