import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { fetchResetPasswordWithPin } from '@services/reset-password';

export const resetPasswordThunk = createAsyncThunk<
	boolean,
	{ password: string; token: string },
	IThunkApi
>('user/forgot', async ({ password, token }) => {
	const response = await fetchResetPasswordWithPin({ password, token });

	return response;
});
