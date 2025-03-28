import { TIngridientsState } from '../../types/ingredients';
import { TApplicationState } from '../../types/redux';

export const selectIngridients = (
	state: TApplicationState
): TIngridientsState => {
	return state.ingridientsState;
};
