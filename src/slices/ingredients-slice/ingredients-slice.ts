import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	EIngredientStatus,
	TIngredient,
	TIngredientsState,
} from '../../types/ingredients';
import { ingredientsThunk } from '../../thunks';

const initialState: TIngredientsState = {
	ingredients: [],
	status: EIngredientStatus.Loading,
};

const ingredientsSlice = createSlice({
	extraReducers(builder) {
		builder
			.addCase(ingredientsThunk.pending, (state) => {
				state.ingredients = [];
				state.status = EIngredientStatus.Loading;
			})
			.addCase(
				ingredientsThunk.fulfilled,
				(state, action: PayloadAction<TIngredient[]>) => {
					state.ingredients = action.payload;
					state.status = EIngredientStatus.Success;
				}
			)
			.addCase(ingredientsThunk.rejected, (state) => {
				state.ingredients = [];
				state.status = EIngredientStatus.Failed;
			});
	},
	initialState,
	name: 'ingirients',
	reducers: {},
});

export const { reducer: ingredientsReducer } = ingredientsSlice;
