import { checkResponse } from '@utils/checkResponse';
import { API_URl } from '../../constants/api';
import { TLoginUserResponse200 } from './types';

interface IParams {
	email: string;
	password: string;
}

export const fetchLoginUser = async (params: IParams) => {
	try {
		return await fetch(API_URl + 'auth/login', {
			method: 'POST',
			body: JSON.stringify(params),
			headers: {
				'Content-type': 'application/json;charset=utf-8',
			},
		})
			.then(checkResponse)
			.then((res: TLoginUserResponse200) => {
				if (!res.success) {
					return Promise.reject(res);
				}

				localStorage.setItem('refreshToken', res.refreshToken);
				localStorage.setItem('accessToken', res.accessToken);

				return { user: res.user, isAuthChecked: true };
			});
	} catch (e) {
		console.warn(e);
		return { user: null, isAuthChecked: false };
	}
};
