import { TOrdersInfo } from '../../types/order';
import { TApplicationState } from '../../types/redux';

export const selectProfileOrderInfo = (
	state: TApplicationState
): TOrdersInfo => {
	return state.profileOrders.ordersInfo;
};
