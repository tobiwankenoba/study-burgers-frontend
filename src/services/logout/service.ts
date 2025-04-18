import { API_URl } from '../../constants/api';
import { TLogoutResponse200 } from './types';
import { fetchWithRefresh } from '@services/refresh-token';

export const fetchLogout = async () => {
	try {
		return await fetchWithRefresh(API_URl + 'auth/logout', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				token: localStorage.getItem('refreshToken') ?? '',
			}),
		}).then((res: TLogoutResponse200) => {
			if (!res.success) {
				return Promise.reject(res);
			}

			localStorage.removeItem('refreshToken');
			localStorage.removeItem('accessToken');

			return res.success;
		});
	} catch (e) {
		console.warn(e);
		return false;
	}
};
