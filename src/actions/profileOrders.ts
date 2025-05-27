import { createAction } from '@reduxjs/toolkit';
import { TOrdersInfo } from '../types/order';

export const connect = createAction<string, 'profileOrders/connect'>(
	'profileOrders/connect'
);
export const disconnect = createAction('profileOrders/disconnect');

export const onConnecting = createAction('profileOrders/onConnecting');
export const onOpen = createAction('profileOrders/onOpen');
export const onClose = createAction('profileOrders/onClose');
export const onError = createAction<string, 'profileOrders/onError'>(
	'profileOrders/onError'
);
export const onMessage = createAction<TOrdersInfo, 'profileOrders/onMessage'>(
	'profileOrders/onMessage'
);

export type profileOrderStatusActionTypes =
	| ReturnType<typeof connect>
	| ReturnType<typeof disconnect>
	| ReturnType<typeof onConnecting>
	| ReturnType<typeof onOpen>
	| ReturnType<typeof onClose>
	| ReturnType<typeof onError>
	| ReturnType<typeof onMessage>;
