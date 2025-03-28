import { TConstructorState } from '../../types/constructor';
import { TApplicationState } from '../../types/redux';

export const selectConstructorBurger = (
	state: TApplicationState
): TConstructorState => {
	return state.constructorState;
};
