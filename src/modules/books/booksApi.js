import axios from 'axios';
import { apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';
import { getRequestUrlBuilder } from '../../utils/getRequestUrlBuilder';

const searchPlaceholder = '%';

const replaceBothSidesWithPlaceholder = search => {
  if (search === undefined) return searchPlaceholder;
  return `%${search}%`;
};

const replaceWithPlaceholder = value => {
  if (value === undefined) return searchPlaceholder;
  return value;
};

export const fetchGetBooksSell = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.BOOKS_SELL,
      user_token: token,
    };
    const response = await axios.get(
      `${apiUrl}/${getRequestUrlBuilder(urlParams)}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchGetBooksBuy = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.BOOKS_BUY,
      user_token: token,
    };
    const response = await axios.get(
      `${apiUrl}/${getRequestUrlBuilder(urlParams)}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchGetBooksSellSearch = async (token, searchData) => {
  try {
    const { category, author, publisher, search } = searchData;

    const urlParams = {
      action: API_ACTIONS.BOOKS_SELL_SEARCH,
      user_token: token,
      ':search': replaceBothSidesWithPlaceholder(search),
      ':cat_search': replaceWithPlaceholder(category),
      ':aut_search': replaceBothSidesWithPlaceholder(author),
      ':pub_search': replaceWithPlaceholder(publisher),
    };
    const response = await axios.get(
      `${apiUrl}/${getRequestUrlBuilder(urlParams)}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchGetBooksBuySearch = async (token, searchData) => {
  try {
    const { category, author, publisher, search } = searchData;

    const urlParams = {
      action: API_ACTIONS.BOOKS_BUY_SEARCH,
      user_token: token,
      ':search': replaceBothSidesWithPlaceholder(search),
      ':cat_search': replaceWithPlaceholder(category),
      ':aut_search': replaceBothSidesWithPlaceholder(author),
      ':pub_search': replaceWithPlaceholder(publisher),
    };
    const response = await axios.get(
      `${apiUrl}/${getRequestUrlBuilder(urlParams)}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
