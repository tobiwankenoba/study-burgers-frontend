import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	TConstructorIngredient,
	TConstructorState,
} from '../../types/constructor';

export const initialState: TConstructorState = {
	bun: {
		id: 1,
		title: '',
		image: '',
		price: 200,
		privateId: '',
	},
	ingredients: [],
};

const constructorBurgerSlice = createSlice({
	initialState,
	name: 'constructorBurger',
	reducers: {
		setBun: (state, action: PayloadAction<TConstructorIngredient>) => {
			state.bun = action.payload;
		},
		setIngredient: (state, action: PayloadAction<TConstructorIngredient>) => {
			state.ingredients = [...state.ingredients, action.payload];
		},
		setAllIngredient: (
			state,
			action: PayloadAction<TConstructorIngredient[]>
		) => {
			state.ingredients = action.payload;
		},
		removeIngredient: (state, action: PayloadAction<number>) => {
			state.ingredients = state.ingredients.filter(
				(item) => item.id !== action.payload
			);
		},
	},
});

export const {
	reducer: constructorBurgerReducer,
	actions: { setBun, setIngredient, removeIngredient, setAllIngredient },
} = constructorBurgerSlice;
