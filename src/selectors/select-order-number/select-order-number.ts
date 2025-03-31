import { TApplicationState } from '../../types/redux';

export const selectOrderNumber = (
	state: TApplicationState
): number | undefined => {
	return state.orderStatus.orderId;
};
