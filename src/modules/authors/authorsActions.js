import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const getAuthors = token => ({
  type: actionTypes.GET_AUTHORS_REQUESTED,
  token,
});
