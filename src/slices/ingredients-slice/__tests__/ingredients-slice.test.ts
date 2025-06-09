import { ingredientsReducer, initialState } from '../ingredients-slice';
import { ingredientsThunk } from '../../../thunks';
import { EIngredientStatus, TIngredient } from '../../../types/ingredients';

const ingredientMock: TIngredient[] = [
	{
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
	},
];

describe('ingredientsSlice', () => {
	it('Должен вернуть initialState', () => {
		expect(ingredientsReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('Должен вернуть список ингридиентов', () => {
		expect(
			ingredientsReducer(undefined, {
				type: ingredientsThunk.fulfilled.type,
				payload: ingredientMock,
			})
		).toEqual({
			...initialState,
			status: EIngredientStatus.Success,
			ingredients: ingredientMock,
		});
	});

	it('Должен вернуть пустой список из-за ошибки', () => {
		expect(
			ingredientsReducer(undefined, {
				type: ingredientsThunk.rejected.type,
				payload: [],
			})
		).toEqual({
			...initialState,
			status: EIngredientStatus.Failed,
			ingredients: [],
		});
	});

	it('Должен вернуть пустой список во время загрузки', () => {
		expect(
			ingredientsReducer(undefined, {
				type: ingredientsThunk.pending.type,
				payload: [],
			})
		).toEqual({
			...initialState,
			status: EIngredientStatus.Loading,
			ingredients: [],
		});
	});
});
