import { fetchWithRefresh } from '@services/refresh-token';
import { API_URl } from '../../constants/api';
import { TGetUserResponse200 } from './types';

export const getUserInfo = async () => {
	try {
		return await fetchWithRefresh(API_URl + 'auth/user', {
			method: 'GET',
			headers: {
				Authorization: localStorage.getItem('accessToken') ?? '',
			},
		}).then((res: TGetUserResponse200) => {
			if (!res.success) {
				return Promise.reject(res);
			}

			return { user: res.user, isAuthChecked: true };
		});
	} catch (e) {
		console.warn(e);
		return { user: null, isAuthChecked: false };
	}
};
