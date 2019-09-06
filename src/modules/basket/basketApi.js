import axios from 'axios';
import url from '../apiUrl';
import { API_ACTIONS } from '../apiActions';

// eslint-disable-next-line import/prefer-default-export
export const fetchOrderBasket = async orderArray => {
  try {
    const response = await axios.post(`${url}/api`, {
      action: API_ACTIONS.REGISTER_BOOK_BUY,
      orderArray,
    });
    return response;
  } catch (error) {
    return error;
  }
};
