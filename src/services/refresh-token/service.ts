import { checkResponse } from '@utils/checkResponse';
import { API_URl } from '../../constants/api';

export const refreshToken = () => {
	return fetch(`${API_URl}auth/token`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			token: localStorage.getItem('refreshToken'),
		}),
	})
		.then(checkResponse)
		.then((refreshData) => {
			if (!refreshData.success) {
				return Promise.reject(refreshData);
			}
			localStorage.setItem('refreshToken', refreshData.refreshToken);
			localStorage.setItem('accessToken', refreshData.accessToken);
			return refreshData as { accessToken: string };
		});
};

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
	try {
		const res = await fetch(url, options);
		return await checkResponse(res);
	} catch (e) {
		if ((e as { message: string }).message === 'jwt expired') {
			const refreshData = await refreshToken();
			options.headers = {
				...options.headers,
				Authorization: refreshData.accessToken,
			};
			const res = await fetch(url, options);
			return await checkResponse(res);
		} else {
			return Promise.reject(e);
		}
	}
};
