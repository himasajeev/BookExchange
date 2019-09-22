import { apiUrl } from '../../src/modules/url';
import { API_ACTIONS } from '../../src/modules/apiActions';

export const setupBooksToBuySellRoutes = isEmpty => {
  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.BOOKS_TO_BUY}*`,
    response: {
      result: isEmpty
        ? []
        : [
            { bookProt: '1', state: 'bought', amount: '0', title: 'XD' },
            { bookProt: '1', state: 'ordered', amount: '23', title: 'XD' },
          ],
    },
  });

  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.BOOKS_TO_SELL}*`,
    response: {
      result: isEmpty
        ? []
        : [
            { bookProt: '1', state: 'sold', title: 'XD' },
            { bookProt: '1', state: 'received', title: 'XD' },
          ],
    },
  });
};

export const setupOverviewRoutes = () => {
  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.OVERVIEW_SELL}*`,
    response: {
      result: [{ toReceive: '0', received: '1', sold: '1', taken: '0' }],
    },
  });

  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.OVERVIEW_BUY}*`,
    response: {
      result: [
        { ordered: '2', bought: '1', orderedAmount: '135', boughtAmount: '0' },
      ],
    },
  });

  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.USER_INFO}*`,
    response: {
      result: [{ name: '1', surname: '1', year: '1', email: '1' }],
    },
  });
};
