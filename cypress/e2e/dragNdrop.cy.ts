/// <reference types="cypress" />

describe('constructor burger', () => {
	beforeEach(() => {
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
		cy.visit('http://localhost:8080/');
	});

	it('passes', () => {
		cy.get('[data-testid="ingredientBurger"]').first().trigger('dragstart');

		cy.get('[data-testid="burgerContainer"]').first().trigger('drop');

		cy.get('[data-testid="createOrderBtn"]').click();

		cy.get('[data-testid="modalCreateOrder"]').contains(80633);
	});
});
