import { apiUrl } from '../../src/modules/url';
import { API_ACTIONS } from '../../src/modules/apiActions';
import bookResponse from './bookResponse.json';

export const setupMainRoutes = (phase = 2) => {
  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.PUBLISHERS}*`,
    response: {
      result: [
        { label: 'WZ AGH', value: 'WZ AGH' },
        { label: 'Uniwersytet w Grazu', value: 'Uniwersytet w Grazu' },
      ],
    },
  });

  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.CATEGORIES}*`,
    response: {
      result: [
        { label: 'Nauka o warunkach', value: 'Nauka o warunkach' },
        {
          label: 'Nauka o finansowaniu uczelni z warunków',
          value: 'Nauka o finansowaniu uczelni z warunków',
        },
        {
          label: 'Nauka o egzaminach modułowych',
          value: 'Nauka o egzaminach modułowych',
        },
        {
          label: 'Nauka o prowadzeniu firmy taksówkarskiej',
          value: 'Nauka o prowadzeniu firmy taksówkarskiej',
        },
      ],
    },
  });

  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.AUTHORS}*`,
    response: {
      result: [
        { label: 'Onri Gurgulgul', value: 'Onri Gurgulgul' },
        { label: 'Ann de Czape', value: 'Ann de Czape' },
        { label: "d'Wolak", value: "d'Wolak" },
        { label: 'Łysy', value: 'Łysy' },
      ],
    },
  });

  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.PHASE}*`,
    response: {
      result: [{ value: phase }],
    },
  });

  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.BOOKS_BUY}*`,
    response: bookResponse,
  });

  cy.route({
    method: 'GET',
    url: `${apiUrl}/?action=${API_ACTIONS.BOOKS_SELL}*`,
    response: bookResponse,
  });
};
