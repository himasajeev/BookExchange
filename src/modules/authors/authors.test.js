import authorsReducer from './authorsReducer';
import * as actionTypes from '../actionTypes';

describe('Authors Reducer', () => {
  it('has a default state', () => {
    const state = undefined;
    const action = { type: '' };

    const defaultState = {};

    const result = authorsReducer(state, action);
    expect(result).toEqual(defaultState);
  });

  it('can handle default action type', () => {
    const state = {
      data: ['Henryk Gurgul', 'Anna Czapkiewicz'],
      isLoading: false,
    };

    const action = { type: '' };
    const result = authorsReducer(state, action);
    expect(result).toEqual(state);
  });

  it('can handle GET_AUTHORS_REQUESTED action type, and change isLoading to true', () => {
    const state = {
      data: ['Henryk Gurgul', 'Anna Czapkiewicz'],
      isLoading: false,
      error: 'error',
    };

    const expected = {
      data: ['Henryk Gurgul', 'Anna Czapkiewicz'],
      isLoading: true,
    };

    const action = { type: actionTypes.GET_AUTHORS_REQUESTED };
    const result = authorsReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle GET_AUTHORS_SUCCEEDED action type, replace old data with new and change isLoading to false', () => {
    const state = {
      data: ['Henryk Gurgul', 'Anna Czapkiewicz'],
      isLoading: true,
    };

    const data = ['Lysy', 'Siwy'];
    const expected = {
      data: ['Lysy', 'Siwy'],
      isLoading: false,
    };

    const action = { type: actionTypes.GET_AUTHORS_SUCCEEDED, data };
    const result = authorsReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle GET_AUTHORS_FAILED action type, and change isLoading to false', () => {
    const state = {
      data: ['Henryk Gurgul', 'Anna Czapkiewicz'],
      isLoading: true,
    };

    const expected = {
      isLoading: false,
      error: 'error',
    };

    const error = 'error';

    const action = { type: actionTypes.GET_AUTHORS_FAILED, error };
    const result = authorsReducer(state, action);
    expect(result).toEqual(expected);
  });
});
