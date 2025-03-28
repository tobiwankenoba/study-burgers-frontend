import { removeIngridient } from '../../slices';
import { TThunk } from '../../types/thunk';

export const removeIngridientThunk =
	(id: number): TThunk =>
	(dispatch) => {
		dispatch(removeIngridient(id));
	};
