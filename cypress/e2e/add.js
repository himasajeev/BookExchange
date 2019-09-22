import { setupMainRoutes } from '../support/setupMainRoutes';
import { apiUrl } from '../../src/modules/url';
import { successMessage } from '../../src/constants/successMessage';

const book = {
  isbn: 'isbn',
  author: 'Henryk Gurgul',
  publisher: 'Empik',
  title: 'Matematyka dla kierunkow ekonomicznych',
};

describe('Add page', () => {
  it('Should redirect to login page without token', () => {
    cy.visit('/add').assertLogin();
  });

  it('Should not redirect user with active token', () => {
    cy.server();
    setupMainRoutes();

    cy.setToken()
      .visit('/add')
      .wait(500)
      .assertAdd();
  });

  it('Should not allow to send incomplete form', () => {
    cy.server();
    setupMainRoutes();

    cy.setToken()
      .visit('/add')
      .get('input[name=isbn]')
      .click()
      .type(book.isbn)
      .get('input[name=author]')
      .click()
      .type(book.author)
      .get('input[name=publisher]')
      .click()
      .type(book.publisher)
      .get('input[name=title]')
      .click()
      .type(book.title)
      .findByText(/Dodaj ksia/)
      .click()
      .findByTestId(/add_error/);
  });

  it('Should allow to send complete form, display success message and clear form', () => {
    cy.server();
    setupMainRoutes();
    cy.route({
      method: 'POST',
      url: `${apiUrl}/`,
      response: {
        result: successMessage,
      },
    });

    cy.setToken()
      .visit('/add')
      .get('input[name=isbn]')
      .click()
      .type(book.isbn)
      .get('input[name=author]')
      .click()
      .type(book.author)
      .get('input[name=publisher]')
      .click()
      .type(book.publisher)
      .get('input[name=title]')
      .click()
      .type(book.title)
      .get('#add-select input:first')
      .click({ force: true })
      .type('{enter}')
      .findByText(/Dodaj k/)
      .click()
      .findByTestId(/add_success/)
      .get('input[name=isbn]')
      .should('have.value', '');
  });
});
