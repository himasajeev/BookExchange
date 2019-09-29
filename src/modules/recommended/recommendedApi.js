import axios from 'axios';
import { apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';
import { getRequestUrlBuilder } from '../../utils/getRequestUrlBuilder';

export const fetchGetRecommendedBuy = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.RECOMMENDED_BUY,
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

export const fetchGetRecommendedSell = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.RECOMMENDED_SELL,
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

export const fetchAddRecommendedBuy = async (token, bookId) => {
  try {
    const requestData = {
      action: API_ACTIONS.ADD_RECOMMENDED_BUY,
      user_token: token,
      ':book_prot_id': bookId,
    };
    const response = await axios.post(`${apiUrl}/`, requestData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchAddRecommendedSell = async (token, bookId) => {
  try {
    const requestData = {
      action: API_ACTIONS.ADD_RECOMMENDED_SELL,
      user_token: token,
      ':book_prot_id': bookId,
    };
    const response = await axios.post(`${apiUrl}/`, requestData);
    return response.data;
  } catch (error) {
    return error;
  }
};
