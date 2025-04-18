import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { TUserState } from '../../types/user';
import { getUserInfo } from '@services/get-user';

export const getUserThunk = createAsyncThunk<TUserState, void, IThunkApi>(
	'user/getInfo',
	async () => {
		const response = await getUserInfo();

		return response;
	}
);
