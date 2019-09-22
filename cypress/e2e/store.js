import { setupMainRoutes } from '../support/setupMainRoutes';

describe('Store page', () => {
  it('Should redirect to login page without token', () => {
    cy.visit('/').assertLogin();
  });

  it('Should not redirect user with active token', () => {
    cy.server();
    setupMainRoutes();

    cy.setToken()
      .visit('/')
      .wait(500)
      .assertStore();
  });

  it('Should allow to add book to basket when in sell phase', () => {
    const phase = 2;
    let addedAmount;
    cy.server();
    setupMainRoutes(phase);

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
      });
  });

  it('Should not allow to add book to basket when in buy phase with no quality selected', () => {
    const phase = 4;
    cy.server();
    setupMainRoutes(phase);

    cy.setToken()
      .visit('/')
      .findAllByTestId(/add_to_basket/)
      .click({ multiple: true })
      .findByTestId(/basket_count/)
      .should('to.have.text', '0');
  });

  it('Should  allow to add book to basket when in buy phase with quality selected', () => {
    const phase = 4;
    let addedAmount;
    cy.server();
    setupMainRoutes(phase);

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
      });
  });
});
