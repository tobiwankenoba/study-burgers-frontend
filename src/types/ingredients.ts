export type TIngredient = {
	id: number;
	privateId: string;
	type: string;
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

export enum EIngredientStatus {
	Loading = 'loading',
	Success = 'success',
	Failed = 'failed',
}

export type TIngredientsState = {
	ingredients: TIngredient[];
	status: EIngredientStatus;
};

export type TIngredientsResponse = {
	data: {
		_id: string;
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

export enum ETabs {
	Buns = 'Булки',
	Sausages = 'Соусы',
	Ingredients = 'Начинки',
}

export enum EDrugTypeIngredients {
	Ingredient = 'ingredient',
	LocalIngredient = 'localIngredient',
}

export enum EDrugTypeBuns {
	Bun = 'bun',
}
