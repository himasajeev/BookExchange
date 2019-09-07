// eslint-disable-next-line import/prefer-default-export
export const getRequestUrlBuilder = object => {
  const urlString = Object.keys(object).reduce((string, key) => {
    return `${string}${key}=${object[key]}&`;
  }, '?');
  return urlString.slice(0, -1);
};
