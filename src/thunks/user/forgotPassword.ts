import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { fetchResetPassword } from '@services/reset-password';

export const forgotPasswordThunk = createAsyncThunk<
	boolean,
	{ email: string },
	IThunkApi
>('user/forgot', async ({ email }, thunkApi) => {
	const { rejectWithValue } = thunkApi;

	try {
		const response = await fetchResetPassword({ email });

		return response;
	} catch (e) {
		console.warn('error');

		return rejectWithValue(e);
	}
});
