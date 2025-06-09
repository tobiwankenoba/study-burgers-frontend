/// <reference types="cypress" />

describe('constructor burger', () => {
	beforeEach(() => {
		cy.prepare();
	});

	it('passes', () => {
		cy.get('[data-testid="ingredientBurger"]').first().trigger('dragstart');

		cy.get('[data-testid="burgerContainer"]').first().trigger('drop');

		cy.get('[data-testid="createOrderBtn"]').click();

		cy.get('[data-testid="modalCreateOrder"]').contains(80633);

		cy.get('[data-testid="modalClose"]').click();
	});
});
