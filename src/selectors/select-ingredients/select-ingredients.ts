import { TIngredientsState } from '../../types/ingredients';
import { TApplicationState } from '../../types/redux';

export const selectIngredients = (
	state: TApplicationState
): TIngredientsState => {
	return state.ingredientsState;
};
