import './commands';

declare global {
	namespace Cypress {
		interface Chainable {
			prepare(): void;
		}
	}
}
