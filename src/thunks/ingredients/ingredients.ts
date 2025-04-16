import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { fetchIngredients } from '@services/fetch-ingredients';
import { TIngredient } from '../../types/ingredients';

export const ingredientsThunk = createAsyncThunk<
	TIngredient[],
	void,
	IThunkApi
>('ingredients/getInfo', async (_, thunkApi) => {
	const { rejectWithValue } = thunkApi;

	try {
		const response = await fetchIngredients();

		return response as TIngredient[];
	} catch (e) {
		console.warn('error');

		return rejectWithValue(e);
	}
});
