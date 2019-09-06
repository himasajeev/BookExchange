import { put, call } from 'redux-saga/effects';
import { fetchGetCategories } from './categoriesApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* getCategoriesSaga(token) {
  try {
    const categories = yield call(fetchGetCategories, token);

    yield put({ type: actionTypes.GET_CATEGORIES_SUCCEEDED, categories });
  } catch (error) {
    yield put({ type: actionTypes.GET_CATEGORIES_FAILED, error });
  }
}
