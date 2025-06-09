import { TOrdersInfo, WebsocketStatus } from '../../../types/order';
import { initialState, ordersReducer } from '../orders-slice';

const ordersMock: TOrdersInfo = {
	success: true,
	orders: [],
	total: 100,
	totalToday: 1,
};

describe('ordersSlice', () => {
	it('Должен вернуть initialState', () => {
		expect(ordersReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('Должен вернуть статус - подключено', () => {
		expect(
			ordersReducer(undefined, {
				type: 'orders/onConnecting',
			})
		).toEqual({
			...initialState,
			status: WebsocketStatus.CONNECTING,
		});
	});
	it('Должен вернуть статус - оффлайн', () => {
		expect(
			ordersReducer(undefined, {
				type: 'orders/onClose',
			})
		).toEqual({
			...initialState,
			status: WebsocketStatus.OFFLINE,
		});
	});
	it('Должен вернуть статус - онлайн', () => {
		expect(
			ordersReducer(undefined, {
				type: 'orders/onOpen',
			})
		).toEqual({
			...initialState,
			status: WebsocketStatus.ONLINE,
		});
	});
	it('Должен вернуть статус - ошибка', () => {
		expect(
			ordersReducer(undefined, {
				type: 'orders/onError',
				payload: 'error',
			})
		).toEqual({
			...initialState,
			error: 'error',
		});
	});
	it('Должен вернуть статус - сообщение', () => {
		expect(
			ordersReducer(undefined, {
				type: 'orders/onMessage',
				payload: ordersMock,
			})
		).toEqual({
			...initialState,
			ordersInfo: ordersMock,
		});
	});
});
