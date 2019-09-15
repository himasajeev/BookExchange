import axios from 'axios';
import { apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';
import { getRequestUrlBuilder } from '../../utils/getRequestUrlBuilder';

const searchPlaceholder = '%';

export const fetchGetBooks = async token => {
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

export const fetchGetBooksSearch = async (token, searchData) => {
  try {
    const {
      category = searchPlaceholder,
      author = searchPlaceholder,
      publisher = searchPlaceholder,
      search = searchPlaceholder,
    } = searchData;

    const urlParams = {
      action: API_ACTIONS.BOOKS_BUY_SEARCH,
      user_token: token,
      ':search': search || '%',
      ':cat_search': category || '%',
      ':aut_search': author || '%',
      ':pub_search': publisher || '%',
    };
    const response = await axios.get(
      `${apiUrl}/${getRequestUrlBuilder(urlParams)}`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
