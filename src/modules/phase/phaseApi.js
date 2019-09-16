import axios from 'axios';
import { apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';
import { getRequestUrlBuilder } from '../../utils/getRequestUrlBuilder';

export const fetchGetPhase = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.PHASE,
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
