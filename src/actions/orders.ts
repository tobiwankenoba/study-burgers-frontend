import { createAction } from '@reduxjs/toolkit';
import { TOrdersInfo } from '../types/order';

export const connect = createAction<string, 'orders/connect'>('orders/connect');
export const disconnect = createAction('orders/disconnect');

export const onConnecting = createAction('orders/onConnecting');
export const onOpen = createAction('orders/onOpen');
export const onClose = createAction('orders/onClose');
export const onError = createAction<string, 'orders/onError'>('orders/onError');
export const onMessage = createAction<TOrdersInfo, 'orders/onMessage'>(
	'orders/onMessage'
);

export type orderStatusActionTypes =
	| ReturnType<typeof connect>
	| ReturnType<typeof disconnect>
	| ReturnType<typeof onConnecting>
	| ReturnType<typeof onOpen>
	| ReturnType<typeof onClose>
	| ReturnType<typeof onError>
	| ReturnType<typeof onMessage>;
