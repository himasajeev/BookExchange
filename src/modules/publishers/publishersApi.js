import axios from 'axios';
import { apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';
import { getRequestUrlBuilder } from '../../utils/getRequestUrlBuilder';

export const fetchGetPublishers = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.PUBLISHERS,
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
