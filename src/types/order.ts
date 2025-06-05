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

export enum WebsocketStatus {
	CONNECTING = 'CONNECTING...',
	ONLINE = 'ONLINE',
	OFFLINE = 'OFFLINE',
}

export type TOrdersState = {
	status: WebsocketStatus;
	ordersInfo: TOrdersInfo;
	error: string | null;
};

export type TOrdersInfo = {
	success: boolean;
	orders: TOrderInfo[];
	total: number;
	totalToday: number;
};

export type TOrderInfo = {
	_id: string;
	ingredients: string[];
	status: string;
	name: string;
	createdAt: string;
	updatedAt: string;
	number: number;
};
