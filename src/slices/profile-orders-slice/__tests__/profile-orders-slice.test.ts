import { TOrdersInfo, WebsocketStatus } from '../../../types/order';
import { initialState, profileOrdersReducer } from '../profile-orders-slice';

const ordersMock: TOrdersInfo = {
	success: true,
	orders: [],
	total: 100,
	totalToday: 1,
};

describe('profileOrdersSlice', () => {
	it('Должен вернуть initialState', () => {
		expect(profileOrdersReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('Должен вернуть статус - подключено', () => {
		expect(
			profileOrdersReducer(undefined, {
				type: 'profileOrders/onConnecting',
			})
		).toEqual({
			...initialState,
			status: WebsocketStatus.CONNECTING,
		});
	});
	it('Должен вернуть статус - оффлайн', () => {
		expect(
			profileOrdersReducer(undefined, {
				type: 'profileOrders/onClose',
			})
		).toEqual({
			...initialState,
			status: WebsocketStatus.OFFLINE,
		});
	});
	it('Должен вернуть статус - онлайн', () => {
		expect(
			profileOrdersReducer(undefined, {
				type: 'profileOrders/onOpen',
			})
		).toEqual({
			...initialState,
			status: WebsocketStatus.ONLINE,
		});
	});
	it('Должен вернуть статус - ошибка', () => {
		expect(
			profileOrdersReducer(undefined, {
				type: 'profileOrders/onError',
				payload: 'error',
			})
		).toEqual({
			...initialState,
			error: 'error',
		});
	});
	it('Должен вернуть статус - сообщение', () => {
		expect(
			profileOrdersReducer(undefined, {
				type: 'profileOrders/onMessage',
				payload: ordersMock,
			})
		).toEqual({
			...initialState,
			ordersInfo: ordersMock,
		});
	});
});
