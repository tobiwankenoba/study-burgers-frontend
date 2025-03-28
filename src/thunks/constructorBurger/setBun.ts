import { setBun } from '../../slices';
import { TConstructorIngredient } from '../../types/constructor';
import { TThunk } from '../../types/thunk';

export const setBunThunk =
	(bun: TConstructorIngredient): TThunk =>
	(dispatch) => {
		dispatch(setBun(bun));
	};
