import categoriesReducer from './categoriesReducer';
import * as actionTypes from '../actionTypes';

describe('Authors Reducer', () => {
  it('has a default state', () => {
    const state = undefined;
    const action = { type: '' };

    const defaultState = {};

    const result = categoriesReducer(state, action);
    expect(result).toEqual(defaultState);
  });

  it('can handle default action type', () => {
    const state = {
      data: ['prawo', 'kodeks'],
      isLoading: false,
    };

    const action = { type: '' };
    const result = categoriesReducer(state, action);
    expect(result).toEqual(state);
  });

  it('can handle GET_CATEGORIES_REQUESTED action type, and change isLoading to true', () => {
    const state = {
      data: ['prawo', 'kodeks'],
      isLoading: false,
      error: 'error',
    };

    const expected = {
      data: ['prawo', 'kodeks'],
      isLoading: true,
    };

    const action = { type: actionTypes.GET_CATEGORIES_REQUESTED };
    const result = categoriesReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle GET_CATEGORIES_SUCCEEDED action type, replace old data with new and change isLoading to false', () => {
    const state = {
      data: ['prawo', 'kodeks'],
      isLoading: true,
    };

    const data = ['cywilne', 'spolki'];
    const expected = {
      data: ['cywilne', 'spolki'],
      isLoading: false,
    };

    const action = { type: actionTypes.GET_CATEGORIES_SUCCEEDED, data };
    const result = categoriesReducer(state, action);
    expect(result).toEqual(expected);
  });

  it('can handle GET_CATEGORIES_FAILED action type, and change isLoading to false', () => {
    const state = {
      data: ['prawo', 'kodeks'],
      isLoading: true,
    };

    const expected = {
      isLoading: false,
      error: 'error',
    };

    const error = 'error';

    const action = { type: actionTypes.GET_CATEGORIES_FAILED, error };
    const result = categoriesReducer(state, action);
    expect(result).toEqual(expected);
  });
});
