import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { TUserState } from '../../types/user';
import { fetchCreateUser } from '@services/create-user';

export const createUserThunk = createAsyncThunk<
	TUserState,
	{ email: string; password: string; name: string },
	IThunkApi
>('user/create', async ({ email, password, name }) => {
	const response = await fetchCreateUser({ email, password, name });

	return response;
});
