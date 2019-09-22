import { setupMainRoutes } from '../support/setupMainRoutes';
import {
  setupBooksToBuySellRoutes,
  setupOverviewRoutes,
} from '../support/setupOverviewRoutes';

describe('Overview page', () => {
  it('Should redirect to login page without token', () => {
    cy.visit('/overview').assertLogin();
  });

  it('Should not redirect user with active token', () => {
    cy.server();
    setupMainRoutes();
    setupOverviewRoutes();
    setupBooksToBuySellRoutes(false);

    cy.setToken()
      .visit('/overview')
      .wait(500)
      .assertOverview();
  });

  it('Should display data properly', () => {
    cy.server();
    setupMainRoutes();
    setupOverviewRoutes();
    setupBooksToBuySellRoutes(false);

    cy.setToken()
      .visit('/overview')
      .assertOverview()
      .findByTestId(/books_to_buy/)
      .findByTestId(/books_to_sell/);
  });

  it('Should hide sell and buy overviews when empty', () => {
    cy.server();
    setupMainRoutes();
    setupOverviewRoutes();
    setupBooksToBuySellRoutes(true);

    cy.setToken()
      .visit('/overview')
      .assertOverview()
      .findByTestId(/books_to_buy/)
      .should('not.exist')
      .findByTestId(/books_to_sell/)
      .should('not.exist');
  });
});
