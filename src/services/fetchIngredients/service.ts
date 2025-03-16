import { API_URl } from '../../constants/api';
import { prepareIngredients } from '../../mappers/prepareIngredients';
import { TIngredientsResponse } from '../../types/ingredients';

export const fetchIngredients = async () => {
	const response = await fetch(API_URl + 'ingredients')
		.then((res) => res.json())
		.then((res) => res);

	console.log(response);

	return prepareIngredients(response as TIngredientsResponse);
};
