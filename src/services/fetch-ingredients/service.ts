import { API_URl } from '../../constants/api';
import { prepareIngredients } from '../../mappers/prepareIngredients';
import { TIngredientsResponse } from '../../types/ingredients';

export const fetchIngredients = async () => {
	try {
		const response = await fetch(API_URl + 'ingredients')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка ${res.status}`);
			})
			.then((res) => res);

		return prepareIngredients(response as TIngredientsResponse);
	} catch (e) {
		console.warn(e);
		return [];
	}
};
