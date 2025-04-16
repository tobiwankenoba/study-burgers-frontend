import { configureStore } from '@reduxjs/toolkit';
import { IPreloadedState } from '../../types/redux';
import {
	constructorBurgerReducer,
	ingredientsReducer,
	orderReducer,
	userReducer,
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
			ingredientsState: ingredientsReducer,
			user: userReducer,
			constructorState: constructorBurgerReducer,
			orderStatus: orderReducer,
		},
	});
}
