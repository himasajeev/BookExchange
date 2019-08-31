import axios from 'axios';
import url from '../apiUrl';

// eslint-disable-next-line import/prefer-default-export
export const fetchGetBooks = async () => {
  try {
    const books = await axios.get(`${url}/books`);
    return books;
  } catch (error) {
    return error;
  }
};
