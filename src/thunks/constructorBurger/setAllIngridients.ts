import { setAllIngridient } from '../../slices';
import { TConstructorIngredient } from '../../types/constructor';

import { TThunk } from '../../types/thunk';

export const setAllIngridientsThunk =
	(ingridients: TConstructorIngredient[]): TThunk =>
	(dispatch) => {
		dispatch(setAllIngridient(ingridients));
	};
