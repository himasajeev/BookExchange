import { mapKeys } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const setFetchKeys = object => {
  return mapKeys(object, (value, key) => `:${key}`);
};
