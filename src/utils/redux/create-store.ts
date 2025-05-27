import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { IPreloadedState } from '../../types/redux';
import {
	constructorBurgerReducer,
	ingredientsReducer,
	orderReducer,
	profileOrdersReducer,
	userReducer,
	ordersReducer,
} from '../../slices';
import { socketMiddleware } from './middleware';
import {
	connect,
	disconnect,
	onClose,
	onConnecting,
	onError,
	onMessage,
	onOpen,
} from '../../actions/orders';
import {
	connect as profileConnect,
	disconnect as profileDisconnect,
	onClose as profileOnClose,
	onConnecting as profileOnConnecting,
	onError as profileOnError,
	onMessage as profileOnMessage,
	onOpen as profileOnOpen,
} from '../../actions/profileOrders';

export const rootReducer = combineReducers({
	ingredientsState: ingredientsReducer,
	user: userReducer,
	constructorState: constructorBurgerReducer,
	orderStatus: orderReducer,
	orders: ordersReducer,
	profileOrders: profileOrdersReducer,
});

const ordersMiddleware = socketMiddleware({
	connect,
	disconnect,
	onConnecting,
	onOpen,
	onClose,
	onError,
	onMessage,
});

const profileModdleware = socketMiddleware(
	{
		connect: profileConnect,
		disconnect: profileDisconnect,
		onConnecting: profileOnConnecting,
		onOpen: profileOnOpen,
		onClose: profileOnClose,
		onError: profileOnError,
		onMessage: profileOnMessage,
	},
	true
);

export function createReduxStore(
	preloadedState: IPreloadedState,
	debugEnabled: boolean
) {
	return configureStore({
		devTools: debugEnabled,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(ordersMiddleware).concat(profileModdleware),
		preloadedState,
		reducer: rootReducer,
	});
}
