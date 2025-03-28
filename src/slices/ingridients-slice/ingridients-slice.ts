import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	EIngridientStatus,
	TIngridientsState,
	TPreparedIngredients,
} from '../../types/ingredients';
import { ingridientsThunk } from '../../thunks';

const initialState: TIngridientsState = {
	ingridients: [
		{
			title: '',
			items: [],
		},
	],
	status: EIngridientStatus.Loading,
};

const ingridientsSlice = createSlice({
	extraReducers(builder) {
		builder
			.addCase(ingridientsThunk.pending, (state) => {
				state.ingridients = [];
				state.status = EIngridientStatus.Loading;
			})
			.addCase(
				ingridientsThunk.fulfilled,
				(state, action: PayloadAction<TPreparedIngredients[]>) => {
					state.ingridients = action.payload;
					state.status = EIngridientStatus.Success;
				}
			)
			.addCase(ingridientsThunk.rejected, (state) => {
				state.ingridients = [];
				state.status = EIngridientStatus.Failed;
			});
	},
	initialState,
	name: 'ingirients',
	reducers: {},
});

export const { reducer: ingridientsReducer } = ingridientsSlice;
