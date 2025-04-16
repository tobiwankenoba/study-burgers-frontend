import { checkResponse } from '@utils/checkResponse';
import { API_URl } from '../../constants/api';
import { TResetPasswordResponse200 } from '../../types/resetPassword';

interface IParams {
	email: string;
}

interface IWithPinParams {
	password: string;
	token: string;
}

export const fetchResetPassword = async (params: IParams) => {
	try {
		return await fetch(API_URl + 'password-reset', {
			method: 'POST',
			body: JSON.stringify(params),
			headers: {
				'Content-type': 'application/json;charset=utf-8',
			},
		})
			.then(checkResponse)
			.then((res: TResetPasswordResponse200) => {
				if (!res.success) {
					return Promise.reject(res);
				}
				return res.success;
			});
	} catch (e) {
		console.warn(e);

		return false;
	}
};

export const fetchResetPasswordWithPin = async (params: IWithPinParams) => {
	try {
		return await fetch(API_URl + 'password-reset/reset', {
			method: 'POST',
			body: JSON.stringify(params),
			headers: {
				'Content-type': 'application/json;charset=utf-8',
			},
		})
			.then(checkResponse)
			.then((res: TResetPasswordResponse200) => {
				if (!res.success) {
					return Promise.reject(res);
				}
				return res.success;
			});
	} catch (e) {
		console.warn(e);

		return false;
	}
};
