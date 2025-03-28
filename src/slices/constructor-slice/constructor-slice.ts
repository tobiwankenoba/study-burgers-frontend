import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	TConstructorIngredient,
	TConstructorState,
} from '../../types/constructor';

const initialState: TConstructorState = {
	bun: {
		id: 0,
		title: '',
		image: '',
		price: 0,
		privateId: '',
	},
	ingridients: [],
};

const constructorBurgerSlice = createSlice({
	initialState,
	name: 'constructorBurger',
	reducers: {
		setBun: (state, action: PayloadAction<TConstructorIngredient>) => {
			state.bun = action.payload;
		},
		setIngridient: (state, action: PayloadAction<TConstructorIngredient>) => {
			state.ingridients = [...state.ingridients, action.payload];
		},
		setAllIngridient: (
			state,
			action: PayloadAction<TConstructorIngredient[]>
		) => {
			state.ingridients = action.payload;
		},
		removeIngridient: (state, action: PayloadAction<number>) => {
			state.ingridients = state.ingridients.filter(
				(item) => item.id !== action.payload
			);
		},
	},
});

export const {
	reducer: constructorBurgerReducer,
	actions: { setBun, setIngridient, removeIngridient, setAllIngridient },
} = constructorBurgerSlice;
