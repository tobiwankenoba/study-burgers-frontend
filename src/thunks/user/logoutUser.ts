import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { fetchLogout } from '@services/logout';

export const logoutUserThunk = createAsyncThunk<boolean, void, IThunkApi>(
	'user/logout',
	async () => {
		const response = await fetchLogout();

		return response;
	}
);
