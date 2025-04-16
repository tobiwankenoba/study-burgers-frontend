import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { TUserState } from '../../types/user';
import { fetchLoginUser } from '@services/login-user';

export const loginUserThunk = createAsyncThunk<
	TUserState,
	{ email: string; password: string },
	IThunkApi
>('user/login', async ({ email, password }, thunkApi) => {
	const { rejectWithValue } = thunkApi;

	try {
		const response = await fetchLoginUser({ email, password });

		return response;
	} catch (e) {
		console.warn('error');

		return rejectWithValue(e);
	}
});
