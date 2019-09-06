import axios from 'axios';
import url from '../apiUrl';
import { API_ACTIONS } from '../apiActions';
// eslint-disable-next-line import/prefer-default-export
export const fetchGetCategories = async token => {
  try {
    const categories = await axios.get(`${url}/api`, {
      action: API_ACTIONS.CATEGORIES,
      user_token: token,
    });
    return categories;
  } catch (error) {
    return error;
  }
};
