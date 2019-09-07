import { getRequestUrlBuilder } from './getRequestUrlBuilder';
import { API_ACTIONS } from '../modules/apiActions';

describe('getRequestUrlBuilder', () => {
  it('Should create valid url', () => {
    const data = {
      action: API_ACTIONS.BOOKS_BUY,
      user_token: 'abc',
    };

    const expected = `?action=${API_ACTIONS.BOOKS_BUY}&user_token=abc`;
    const result = getRequestUrlBuilder(data);
    expect(result).toEqual(expected);
  });
});
