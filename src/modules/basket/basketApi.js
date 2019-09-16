import axios from 'axios';
import { apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';

export const fetchRegisterBookBuy = async (basket, token) => {
  try {
    const orderArray = Object.keys(basket).map(key => {
      return {
        ':id_book_prot': basket[key].id,
        ':state_variant': basket[key].selectedState.value,
      };
    });

    const response = await axios.post(`${apiUrl}/`, {
      action: API_ACTIONS.REGISTER_BOOK_BUY,
      orderArray,
      user_token: token,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const fetchRegisterBookSell = async (basket, token) => {
  try {
    const orderArray = Object.keys(basket).map(key => {
      return {
        ':id_book_prot': basket[key].id,
      };
    });

    const response = await axios.post(`${apiUrl}/`, {
      action: API_ACTIONS.REGISTER_BOOK_SELL,
      orderArray,
      user_token: token,
    });
    return response;
  } catch (error) {
    return error;
  }
};
