import { put, call } from 'redux-saga/effects';
import { fetchGetCategories } from './categoriesApi';
import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function* getCategoriesSaga({ token }) {
  try {
    const response = yield call(fetchGetCategories, token);

    const values = response.result;
    const data = [{ value: '' }, ...values];
    yield put({ type: actionTypes.GET_CATEGORIES_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: actionTypes.GET_CATEGORIES_FAILED, error });
  }
}
