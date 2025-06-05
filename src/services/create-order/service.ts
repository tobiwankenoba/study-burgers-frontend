import { API_URl } from '../../constants/api';
import { TOrderResponse } from '../../types/order';

type TCreateOrderParams = {
	ingredients: string[];
	token?: string;
};

export const createOrder = async (params: TCreateOrderParams) => {
	try {
		const response = await fetch(API_URl + 'orders', {
			body: JSON.stringify({ ingredients: params.ingredients }),
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: params.token ?? '',
			},
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка ${res.status}`);
			})
			.then((res) => res);

		return (response as TOrderResponse).order.number;
	} catch (e) {
		console.warn(e);
	}
};
