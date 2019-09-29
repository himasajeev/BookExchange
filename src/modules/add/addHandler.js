import { toast } from 'react-toastify';
import { isResponseWithArrayValid } from '../../utils/validateResponse';
import { fetchAddBook } from './addApi';
import { RESPONSES } from '../../routes/Add/constants';

export const handleAddBook = async (token, addValue, addToBasket) => {
  try {
    const response = await fetchAddBook(token, { ...addValue });
    const [responseBook] = response.result;

    if (isResponseWithArrayValid(response.result)) {
      addToBasket(responseBook, token);
    } else {
      toast.error(RESPONSES.SERVER_ERROR.text);
    }
  } catch (error) {
    toast.error(RESPONSES.SERVER_ERROR.text);
  }
};
