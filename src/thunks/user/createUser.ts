import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { TUserState } from '../../types/user';
import { fetchCreateUser } from '@services/create-user';

export const createUserThunk = createAsyncThunk<
	TUserState,
	{ email: string; password: string; name: string },
	IThunkApi
>('user/create', async ({ email, password, name }, thunkApi) => {
	const { rejectWithValue } = thunkApi;

	try {
		const response = await fetchCreateUser({ email, password, name });

		return response;
	} catch (e) {
		console.warn('error');

		return rejectWithValue(e);
	}
});
