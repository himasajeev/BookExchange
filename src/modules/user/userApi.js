import axios from 'axios';
import url from '../apiUrl';

export const fetchRegisterUser = async user => {
  try {
    const register = await axios.post(
      `${url}/authorization/register.php`,
      user,
    );
    return register;
  } catch (error) {
    return error;
  }
};

export const fetchLoginUser = async userData => {
  try {
    const user = await axios.post(`${url}/authorization/login.php`, userData);
    return user;
  } catch (error) {
    return error;
  }
};
