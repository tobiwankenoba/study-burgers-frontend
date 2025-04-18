import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { TUser } from '../../types/user';
import { updateUserInfo } from '@services/update-user';

export const updateUserThunk = createAsyncThunk<
	TUser | null,
	{ email: string; password: string; name: string },
	IThunkApi
>('user/update', async ({ email, password, name }) => {
	const response = await updateUserInfo({ email, password, name });

	return response;
});
