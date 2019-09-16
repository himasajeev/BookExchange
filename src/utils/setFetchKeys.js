import { mapKeys } from 'lodash';

export const setFetchKeys = object => {
  return mapKeys(object, (value, key) => `:${key}`);
};
