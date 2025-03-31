import { EOrderStatus } from '../../types/order';
import { TApplicationState } from '../../types/redux';

export const selectOrderStatus = (state: TApplicationState): EOrderStatus => {
	return state.orderStatus.status;
};
