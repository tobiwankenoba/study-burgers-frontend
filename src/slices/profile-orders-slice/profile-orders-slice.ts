import { createSlice } from '@reduxjs/toolkit';

import {
	onClose,
	onConnecting,
	onError,
	onMessage,
	onOpen,
} from '../../actions/profileOrders';
import { TOrdersState, WebsocketStatus } from '../../types/order';

const initialState: TOrdersState = {
	status: WebsocketStatus.OFFLINE,
	ordersInfo: { orders: [], success: false, total: 0, totalToday: 0 },
	error: null,
};

export const profileOrdersSlice = createSlice({
	name: 'profileOrders',
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

export const { reducer: profileOrdersReducer } = profileOrdersSlice;
