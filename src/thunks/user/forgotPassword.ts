import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { fetchResetPassword } from '@services/reset-password';

export const forgotPasswordThunk = createAsyncThunk<
	boolean,
	{ email: string },
	IThunkApi
>('user/forgot', async ({ email }) => {
	const response = await fetchResetPassword({ email });

	return response;
});
