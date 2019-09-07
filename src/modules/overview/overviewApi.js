import axios from 'axios';
import { apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';
import { getRequestUrlBuilder } from '../../utils/getRequestUrlBuilder';

export const fetchGetOverviewBuy = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.OVERVIEW_BUY,
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

export const fetchGetOverviewSell = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.OVERVIEW_SELL,
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

export const fetchGetOverviewBooksToSell = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.BOOKS_TO_SELL,
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

export const fetchGetOverviewBooksToBuy = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.BOOKS_TO_BUY,
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
