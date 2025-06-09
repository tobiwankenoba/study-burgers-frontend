/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import type {} from './cypress';

Cypress.Commands.add('prepare', () => {
	window.localStorage.setItem(
		'refreshToken',
		JSON.stringify('test-refreshToken')
	);
	window.localStorage.setItem(
		'accessToken',
		JSON.stringify('test-accessToken')
	);
	cy.intercept('GET', 'ingredients', { fixture: 'ingredients' }).as(
		'getIngredients'
	);
	cy.intercept('GET', 'user', { fixture: 'user' }).as('getUser');
	cy.intercept('POST', 'orders', { fixture: 'order' }).as('postOrder');
	cy.visit('/');
});
