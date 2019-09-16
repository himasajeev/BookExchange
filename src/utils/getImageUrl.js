import { imageUrl } from '../modules/url';

export const getImageUrl = id => {
  return `${imageUrl}${id}.jpg`;
};
