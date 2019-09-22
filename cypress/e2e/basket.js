import { setupMainRoutes } from '../support/setupMainRoutes';
import { apiUrl } from '../../src/modules/url';
import { successMessage } from '../../src/constants/successMessage';

describe('Basket page', () => {
  it('Should redirect to login page without token', () => {
    cy.visit('/basket').assertLogin();
  });

  it('Should not redirect user with active token', () => {
    cy.server();
    setupMainRoutes();

    cy.setToken()
      .visit('/basket')
      .wait(500)
      .assertBasket();
  });

  it('Should display placeholder text and hide checkout button when basket is empty', () => {
    cy.server();
    setupMainRoutes();

    cy.setToken()
      .visit('/basket')
      .findByTestId(/order_basket/)
      .should('not.exist');
  });

  it('Should allow to checkout basket when in sell phase', () => {
    const phase = 2;
    let addedAmount;
    cy.server();
    setupMainRoutes(phase);
    cy.route({
      method: 'POST',
      url: `${apiUrl}/`,
      response: {
        result: successMessage,
      },
    });

    cy.setToken()
      .visit('/')
      .findAllByTestId(/add_to_basket/)
      .then($value => {
        addedAmount = $value.length;
      })
      .click({ multiple: true })
      .findByTestId(/basket_count/)
      .should($identifier => {
        expect($identifier.text()).to.equal(`${addedAmount}`);
      })
      .click()
      .findByTestId(/order_basket/)
      .click()
      .wait(2000)
      .findByTestId(/order_basket/)
      .should('not.exist')
      .findByTestId(/basket_count/)
      .should('have.text', '0');
  });

  it('Should  allow to checkout basket in buy phase', () => {
    const phase = 4;
    let addedAmount;
    cy.server();
    setupMainRoutes(phase);
    cy.route({
      method: 'POST',
      url: `${apiUrl}/`,
      response: {
        result: successMessage,
      },
    });

    cy.setToken()
      .visit('/')
      .get('.add_book_select input')
      .then($value => {
        addedAmount = $value.length;
      })
      .each($el => {
        cy.wrap($el)
          .click({ force: true })
          .type('{enter}');
      })
      .findAllByTestId(/add_to_basket/)
      .click({ multiple: true })
      .findByTestId(/basket_count/)
      .should($identifier => {
        expect($identifier.text()).to.equal(`${addedAmount}`);
      })
      .click()
      .findByTestId(/order_basket/)
      .click()
      .wait(2000)
      .findByTestId(/order_basket/)
      .should('not.exist')
      .findByTestId(/basket_count/)
      .should('have.text', '0');
  });
});
