export type TIngredient = {
	title: string;
	image: string;
	bigImage: string;
	smallImage: string;
	calories: number;
	carbohydrates: number;
	fat: number;
	proteins: number;
	price: number;
};

export type TPreparedIngredients = {
	title: string;
	items: TIngredient[];
};

export type TIngredientsResponse = {
	data: {
		name: string;
		type: string;
		proteins: number;
		fat: number;
		carbohydrates: number;
		calories: number;
		price: number;
		image: string;
		image_mobile: string;
		image_large: string;
	}[];
};
