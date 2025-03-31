import { setIngridient } from '../../slices';
import { TConstructorIngredient } from '../../types/constructor';
import { TThunk } from '../../types/thunk';

export const setIngridientsThunk =
	(ingridient: TConstructorIngredient): TThunk =>
	(dispatch) => {
		dispatch(setIngridient(ingridient));
	};
