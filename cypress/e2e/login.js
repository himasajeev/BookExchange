import { authUrl } from '../../src/modules/url';
import { setupMainRoutes } from '../support/setupMainRoutes';
import { token } from '../support/token';

describe('Login page', () => {
  const user = { email: 'xd@gmail.com', password: 'Hurhul69' };

  it('Should redirect to login page without token', () => {
    cy.visit('/overview').assertLogin();
  });

  it('Should not redirect user with active token', () => {
    cy.setToken()
      .visit('/basket')
      .wait(500)
      .assertBasket();
  });

  it('Should display error fields are empty', () => {
    cy.visit('/')
      .findByText(/Zaloguj/)
      .click()
      .findByTestId(/login-error/)
      .assertLogin();
  });

  it('Should display error when login fails', () => {
    cy.server();

    cy.route({
      method: 'POST',
      url: `${authUrl}/register`,
      response: {
        result: { message: 'Incorrect password.', operation_successful: false },
      },
    });

    cy.visit('/')
      .findByPlaceholderText(/E-mail/)
      .click()
      .type(user.email)
      .findByPlaceholderText(/Hasło/)
      .click()
      .type(user.password)
      .findByText(/Zaloguj/)
      .click()
      .findByTestId(/login-error/)
      .assertLogin();
  });

  it('Should login successfully', () => {
    cy.server();
    setupMainRoutes();
    cy.route({
      method: 'POST',
      url: `${authUrl}/login`,
      response: {
        result: { operation_successful: true, token },
      },
    });

    cy.visit('/')
      .findByPlaceholderText(/E-mail/)
      .click()
      .type(user.email)
      .findByPlaceholderText(/Hasło/)
      .click()
      .type(user.password)
      .findByText(/Zaloguj/)
      .click()
      .assertStore()
      .checkToken()
      .findByText(/Wyloguj/);
  });

  it('Should logout successfully after logging in', () => {
    cy.server();
    setupMainRoutes();
    cy.route({
      method: 'POST',
      url: `${authUrl}/login`,
      response: {
        result: { operation_successful: true, token },
      },
    });

    cy.visit('/')
      .findByPlaceholderText(/E-mail/)
      .click()
      .type(user.email)
      .findByPlaceholderText(/Hasło/)
      .click()
      .type(user.password)
      .findByText(/Zaloguj/)
      .click()
      .assertStore()
      .checkToken()
      .findByText(/Wyloguj/)
      .click()
      .assertLogin()
      .window()
      .its('localStorage.token')
      .should('be.a', 'undefined');
  });
});
