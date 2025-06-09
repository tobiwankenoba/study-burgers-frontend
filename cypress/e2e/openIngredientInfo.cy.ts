/// <reference types="cypress" />

describe('open modalInfo', () => {
	beforeEach(() => {
		cy.prepare();
	});

	it('passes', () => {
		cy.get('[data-testid="ingredientBurger"]').first().click();

		cy.get('[data-testid="ingredientDetails"]').contains('Детали ингредиента');

		cy.get('[data-testid="modalClose"]').click();
	});
});
