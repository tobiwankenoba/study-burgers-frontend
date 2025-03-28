import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { createOrder } from '@services/create-order';

export const createOrderThunk = createAsyncThunk<
	number,
	{ ingredients: string[] },
	IThunkApi
>('order/create', async ({ ingredients }, thunkApi) => {
	const { rejectWithValue } = thunkApi;

	try {
		const response = await createOrder({ ingredients });

		return response as number;
	} catch (e) {
		console.warn('error');

		return rejectWithValue(e);
	}
});
