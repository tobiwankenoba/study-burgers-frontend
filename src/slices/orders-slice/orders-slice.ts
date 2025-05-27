import { createSlice } from '@reduxjs/toolkit';

import {
	onClose,
	onConnecting,
	onError,
	onMessage,
	onOpen,
} from '../../actions/orders';
import { TOrdersState, WebsocketStatus } from '../../types/order';

const initialState: TOrdersState = {
	status: WebsocketStatus.OFFLINE,
	ordersInfo: { orders: [], success: false, total: 0, totalToday: 0 },
	error: null,
};

export const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(onConnecting, (state) => {
				state.status = WebsocketStatus.CONNECTING;
			})
			.addCase(onOpen, (state) => {
				state.status = WebsocketStatus.ONLINE;
			})
			.addCase(onClose, (state) => {
				state.status = WebsocketStatus.OFFLINE;
			})
			.addCase(onError, (state, action) => {
				state.error = action.payload;
			})
			.addCase(onMessage, (state, action) => {
				state.ordersInfo = action.payload;
			});
	},
});

export const { reducer: ordersReducer } = ordersSlice;
