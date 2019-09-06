import axios from 'axios';
import url from '../apiUrl';
import { API_ACTIONS } from '../apiActions';
// eslint-disable-next-line import/prefer-default-export
export const fetchGetPublishers = async token => {
  try {
    const authors = await axios.get(`${url}/api`, {
      action: API_ACTIONS.PUBLISHERS,
      user_token: token,
    });
    return authors;
  } catch (error) {
    return error;
  }
};
