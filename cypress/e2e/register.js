import { authUrl } from '../../src/modules/url';
import { setupMainRoutes } from '../support/setupMainRoutes';
import { token } from '../support/token';

const user = {
  email: 'xd@gmail.com',
  password: 'Hurhul69',
  name: 'Hengryk',
  surname: 'Gurgul',
  year: 1,
};

describe('Register page', () => {
  it('Should display error fields are empty', () => {
    cy.visit('/')
      .findByText(/konta/)
      .click()
      .assertRegister()
      .findByText(/Zarejestruj/)
      .click()
      .findByTestId(/register-error/);
  });

  it('Should display error when register fails', () => {
    cy.server();
    cy.route({
      method: 'POST',
      url: `${authUrl}/register`,
      response: {
        result: { message: 'Error', operation_successful: false },
      },
    });

    cy.visit('/')
      .findByText(/konta/)
      .click()
      .assertRegister()
      .findByPlaceholderText(/E-mail/)
      .click()
      .type(user.email)
      .findByPlaceholderText(/Hasło/)
      .click()
      .type(user.password)
      .findByPlaceholderText(/Imię/)
      .click()
      .type(user.name)
      .findByPlaceholderText(/Nazwisko/)
      .click()
      .type(user.surname)
      .findByPlaceholderText(/Rok/)
      .click()
      .type(user.year)
      .findByText(/Zarejestruj/)
      .click()
      .findByTestId(/register-error/)
      .assertRegister();
  });

  it('Should register and redirect successfully', () => {
    cy.server();
    setupMainRoutes();
    cy.route({
      method: 'POST',
      url: `${authUrl}/register`,
      response: {
        result: { operation_successful: true, token },
      },
    });

    cy.visit('/')
      .findByText(/konta/)
      .click()
      .assertRegister()
      .findByPlaceholderText(/E-mail/)
      .click()
      .type(user.email)
      .findByPlaceholderText(/Hasło/)
      .click()
      .type(user.password)
      .findByPlaceholderText(/Imię/)
      .click()
      .type(user.name)
      .findByPlaceholderText(/Nazwisko/)
      .click()
      .type(user.surname)
      .findByPlaceholderText(/Rok/)
      .click()
      .type(user.year)
      .findByText(/Zarejestruj/)
      .click()
      .assertStore()
      .checkToken()
      .findByText(/Wyloguj/);
  });
});
