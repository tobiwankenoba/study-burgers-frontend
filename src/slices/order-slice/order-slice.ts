import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EOrderStatus, TOrderStatus } from '../../types/order';
import { createOrderThunk } from '../../thunks';

const initialState: TOrderStatus = {
	status: EOrderStatus.Init,
};

const orderSlice = createSlice({
	extraReducers(builder) {
		builder
			.addCase(createOrderThunk.pending, (state) => {
				state.status = EOrderStatus.Loading;
			})
			.addCase(
				createOrderThunk.fulfilled,
				(state, action: PayloadAction<number>) => {
					state.status = EOrderStatus.Success;
					state.orderId = action.payload;
				}
			)
			.addCase(createOrderThunk.rejected, (state) => {
				state.status = EOrderStatus.Failed;
			});
	},
	initialState,
	name: 'order',
	reducers: {},
});

export const { reducer: orderReducer } = orderSlice;
