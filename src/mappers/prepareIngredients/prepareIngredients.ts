import {
	TIngredient,
	TIngredientsResponse,
	TPreparedIngredients,
} from '../../types/ingredients';

export const prepareIngredients = (
	response: TIngredientsResponse
): TPreparedIngredients[] => {
	const result = [
		{
			title: 'Булки',
			items: [] as TIngredient[],
		},
		{
			title: 'Соусы',
			items: [] as TIngredient[],
		},
		{
			title: 'Начинки',
			items: [] as TIngredient[],
		},
	];
	response.data.map(
		({
			name,
			image,
			image_large,
			image_mobile,
			calories,
			carbohydrates,
			price,
			proteins,
			type,
		}) => {
			const formatedElement = {
				title: name,
				image,
				bigImage: image_large,
				smallImage: image_mobile,
				calories,
				carbohydrates,
				price,
				proteins,
			} as TIngredient;

			switch (type) {
				case 'bun':
					result[0].items.push(formatedElement);
					break;
				case 'sauce':
					result[1].items.push(formatedElement);
					break;
				case 'main':
					result[2].items.push(formatedElement);
					break;
				default:
					break;
			}
		}
	);

	return result;
};
