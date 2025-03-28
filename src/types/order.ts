export type TOrderStatus = {
	status: EOrderStatus;
	orderId?: number;
};

export enum EOrderStatus {
	Init = 'init',
	Success = 'success',
	Failed = 'failed',
	Loading = 'loading',
}

export type TOrderResponse = {
	name: string;
	order: { number: number };
	success: boolean;
};
