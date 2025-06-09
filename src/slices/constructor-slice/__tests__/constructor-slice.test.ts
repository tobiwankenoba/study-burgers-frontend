import { TIngredient } from '../../../types/ingredients';
import { initialState, constructorBurgerReducer } from '../constructor-slice';

const ingredientMock: TIngredient = {
	id: 1,
	privateId: '',
	type: '',
	title: '',
	image: '',
	bigImage: '',
	smallImage: '',
	calories: 1,
	carbohydrates: 1,
	fat: 1,
	proteins: 1,
	price: 1,
};

const bunMock = {
	title: '',
	id: 101,
	image: '',
	price: 0,
	privateId: '',
};

describe('constructorSlice', () => {
	it('Должен вернуть initialState', () => {
		expect(constructorBurgerReducer(undefined, { type: '' })).toEqual(
			initialState
		);
	});

	it('setBun', () => {
		expect(
			constructorBurgerReducer(undefined, {
				type: 'constructorBurger/setBun',
				payload: bunMock,
			})
		).toEqual({
			...initialState,
			bun: bunMock,
		});
	});

	it('setIngredient', () => {
		expect(
			constructorBurgerReducer(undefined, {
				type: 'constructorBurger/setIngredient',
				payload: ingredientMock,
			})
		).toEqual({
			...initialState,
			ingredients: [ingredientMock],
		});
	});

	it('setAllIngredient', () => {
		expect(
			constructorBurgerReducer(undefined, {
				type: 'constructorBurger/setAllIngredient',
				payload: [ingredientMock, ingredientMock],
			})
		).toEqual({
			...initialState,
			ingredients: [ingredientMock, ingredientMock],
		});
	});

	it('removeIngredient', () => {
		expect(
			constructorBurgerReducer(
				{ ...initialState, ingredients: [ingredientMock] },
				{
					type: 'constructorBurger/removeIngredient',
					payload: 1,
				}
			)
		).toEqual({
			...initialState,
			ingredients: [],
		});
	});
});
