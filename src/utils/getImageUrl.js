import { imageUrl } from '../modules/url';

// eslint-disable-next-line import/prefer-default-export
export const getImageUrl = id => {
  return `${imageUrl}${id}.jpg`;
};
