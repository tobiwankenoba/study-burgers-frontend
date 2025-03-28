import { configureStore } from '@reduxjs/toolkit';
import { IPreloadedState } from '../../types/redux';
import {
	constructorBurgerReducer,
	ingridientsReducer,
	orderReducer,
} from '../../slices';

export function createReduxStore(
	preloadedState: IPreloadedState,
	debugEnabled: boolean
) {
	return configureStore({
		devTools: debugEnabled,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
		preloadedState,
		reducer: {
			ingridientsState: ingridientsReducer,
			constructorState: constructorBurgerReducer,
			orderStatus: orderReducer,
		},
	});
}
