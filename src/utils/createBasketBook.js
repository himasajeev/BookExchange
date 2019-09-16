import { uniqueId } from 'lodash';

export const createBasketBook = book => {
  const basketBookId = uniqueId();
  return {
    [basketBookId]: {
      ...book,
    },
  };
};
