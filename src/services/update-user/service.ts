import { fetchWithRefresh } from '@services/refresh-token';
import { API_URl } from '../../constants/api';
import { TGetUserResponse200 } from './types';

type TParams = {
	name?: string;
	email?: string;
	password?: string;
};

export const updateUserInfo = async (params: TParams) => {
	try {
		return await fetchWithRefresh(API_URl + 'auth/user', {
			method: 'PATCH',
			body: JSON.stringify(params),
			headers: {
				'Content-type': 'application/json;charset=utf-8',
				Authorization: localStorage.getItem('accessToken') ?? '',
			},
		}).then((res: TGetUserResponse200) => {
			if (!res.success) {
				return Promise.reject(res);
			}

			return res.user;
		});
	} catch (e) {
		console.warn(e);
		return null;
	}
};
