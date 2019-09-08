import axios from 'axios';
import { setFetchKeys } from '../../utils/setFetchKeys';
import { authUrl, apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';
import { getRequestUrlBuilder } from '../../utils/getRequestUrlBuilder';

export const fetchRegisterUser = async user => {
  try {
    const response = await axios.post(
      `${authUrl}/register`,
      setFetchKeys(user),
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchLoginUser = async user => {
  try {
    const response = await axios.post(`${authUrl}/login`, setFetchKeys(user));
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchGetUserInfo = async token => {
  try {
    const urlParams = {
      action: API_ACTIONS.USER_INFO,
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

export const fetchLogoutUser = async token => {
  try {
    const response = await axios.post(`${authUrl}/logout`, {
      user_token: token,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
