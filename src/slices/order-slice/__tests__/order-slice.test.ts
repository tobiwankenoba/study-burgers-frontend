import { createOrderThunk } from '../../../thunks';
import { EOrderStatus } from '../../../types/order';
import { initialState, orderReducer } from '../order-slice';

describe('orderSlice', () => {
	it('Должен вернуть initialState', () => {
		expect(orderReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('Должен вернуть номер заказа', () => {
		expect(
			orderReducer(undefined, {
				type: createOrderThunk.fulfilled.type,
				payload: 1,
			})
		).toEqual({
			...initialState,
			status: EOrderStatus.Success,
			orderId: 1,
		});
	});

	it('Должен вернуть статус ошибка', () => {
		expect(
			orderReducer(undefined, {
				type: createOrderThunk.rejected.type,
			})
		).toEqual({
			...initialState,
			status: EOrderStatus.Failed,
		});
	});

	it('Должен вернуть статус загрузки', () => {
		expect(
			orderReducer(undefined, {
				type: createOrderThunk.pending.type,
			})
		).toEqual({
			...initialState,
			status: EOrderStatus.Loading,
		});
	});
});
