import { TIngredient, TIngredientsResponse } from '../../types/ingredients';

export const prepareIngredients = (
	response: TIngredientsResponse
): TIngredient[] => {
	return response.data.map(
		({
			_id,
			name,
			image,
			image_large,
			image_mobile,
			calories,
			carbohydrates,
			price,
			proteins,
			fat,
			type,
		}) => {
			return {
				id: getRandomInt(1, 100000),
				privateId: _id,
				type,
				title: name,
				image,
				bigImage: image_large,
				smallImage: image_mobile,
				calories,
				carbohydrates,
				price,
				fat,
				proteins,
			} as TIngredient;
		}
	);
};

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
