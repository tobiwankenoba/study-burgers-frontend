import { TOrdersInfo } from '../../types/order';
import { TApplicationState } from '../../types/redux';

export const selectOrderInfo = (state: TApplicationState): TOrdersInfo => {
	return state.orders.ordersInfo;
};
