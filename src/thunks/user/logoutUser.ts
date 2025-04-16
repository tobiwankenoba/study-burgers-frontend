import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { fetchLogout } from '@services/logout';

export const logoutUserThunk = createAsyncThunk<boolean, void, IThunkApi>(
	'user/logout',
	async (_, thunkApi) => {
		const { rejectWithValue } = thunkApi;

		try {
			const response = await fetchLogout();

			return response;
		} catch (e) {
			console.warn('error');

			return rejectWithValue(e);
		}
	}
);
