import { token } from './token';

Cypress.Commands.add('assertStore', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`);
});

Cypress.Commands.add('assertLogin', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/login`);
});

Cypress.Commands.add('assertRegister', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/register`);
});

Cypress.Commands.add('assertBasket', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/basket`);
});

Cypress.Commands.add('assertOverview', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/overview`);
});

Cypress.Commands.add('assertAdd', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/add`);
});

Cypress.Commands.add('assertStore', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`);
});

Cypress.Commands.add('assertBasket', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/basket`);
});

Cypress.Commands.add('setToken', () => {
  window.localStorage.setItem('token', token);
  cy.visit(`${Cypress.config().baseUrl}/`);
});

Cypress.Commands.add('checkToken', () => {
  cy.window()
    .its('localStorage.token')
    .should('be.a', 'string');
});
