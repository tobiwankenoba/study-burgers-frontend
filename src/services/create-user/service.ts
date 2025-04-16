import { checkResponse } from '@utils/checkResponse';
import { API_URl } from '../../constants/api';
import { TCreateUserResponse200 } from './types';

interface IParams {
	email: string;
	password: string;
	name: string;
}

export const fetchCreateUser = async (params: IParams) => {
	try {
		return await fetch(API_URl + 'auth/register', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(params),
		})
			.then(checkResponse)
			.then((response: TCreateUserResponse200) => {
				if (!response.success) {
					return Promise.reject(response);
				}
				localStorage.setItem('refreshToken', response.refreshToken);
				localStorage.setItem('accessToken', response.accessToken);

				return { user: response.user, isAuthChecked: true };
			});
	} catch (e) {
		console.warn(e);
		return { user: null, isAuthChecked: false };
	}
};
