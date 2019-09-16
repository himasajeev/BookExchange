import { uniqueId } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const createBasketBook = book => {
  const basketBookId = uniqueId();
  return {
    [basketBookId]: {
      ...book,
    },
  };
};
