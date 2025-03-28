import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { fetchIngredients } from '@services/fetch-ingredients';
import { TPreparedIngredients } from '../../types/ingredients';

export const ingridientsThunk = createAsyncThunk<
	TPreparedIngredients[],
	void,
	IThunkApi
>('ingridients/getInfo', async (_, thunkApi) => {
	const { rejectWithValue } = thunkApi;

	try {
		const response = await fetchIngredients();

		return response as TPreparedIngredients[];
	} catch (e) {
		console.warn('error');

		return rejectWithValue(e);
	}
});
