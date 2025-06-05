import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { createOrder } from '@services/create-order';

export const createOrderThunk = createAsyncThunk<
	number,
	{ ingredients: string[]; token?: string },
	IThunkApi
>('order/create', async ({ ingredients, token }) => {
	const response = await createOrder({ ingredients, token });

	return response as number;
});
