import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const getPublishers = token => ({
  type: actionTypes.GET_PUBLISHERS_REQUESTED,
  token,
});
