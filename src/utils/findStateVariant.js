import { BOOK_STATES } from '../constants/bookStates';

// eslint-disable-next-line import/prefer-default-export
export const findStateVariant = stateVariant => {
  const foundState = BOOK_STATES.find(book => Number(stateVariant) === book.id);
  return foundState.value;
};
