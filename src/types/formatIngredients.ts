import { TPreparedIngredients, TIngredient } from './ingredients';

export const formatIngredients = (
	items: TIngredient[]
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

	items.map((item) => {
		switch (item.type) {
			case 'bun':
				result[0].items.push(item);
				break;
			case 'sauce':
				result[1].items.push(item);
				break;
			case 'main':
				result[2].items.push(item);
				break;
			default:
				break;
		}
	});

	return result;
};
