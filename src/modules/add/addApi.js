import axios from 'axios';
import { apiUrl } from '../url';
import { API_ACTIONS } from '../apiActions';

// eslint-disable-next-line import/prefer-default-export
export const fetchAddBook = async (token, book) => {
  try {
    const { isbn, author, publisher, title, category } = book;
    const urlParams = {
      action: API_ACTIONS.ADD_BOOK,
      user_token: token,
      ':ISBN': isbn,
      ':Author': author,
      ':Publisher': publisher,
      ':Title': title,
      ':Category': category,
    };

    const response = await axios.post(`${apiUrl}/`, {
      ...urlParams,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
