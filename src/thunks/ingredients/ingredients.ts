import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApi } from '../../types/redux';
import { fetchIngredients } from '@services/fetch-ingredients';
import { TIngredient } from '../../types/ingredients';

export const ingredientsThunk = createAsyncThunk<
	TIngredient[],
	void,
	IThunkApi
>('ingredients/getInfo', async () => {
	const response = await fetchIngredients();

	return response as TIngredient[];
});
