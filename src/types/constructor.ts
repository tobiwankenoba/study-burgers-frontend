import { TIngredient } from './ingredients';

export type TConstructorState = {
	bun: TConstructorIngredient;
	ingridients: TConstructorIngredient[];
};

export type TConstructorIngredient = Pick<
	TIngredient,
	'title' | 'id' | 'image' | 'price' | 'privateId'
>;
