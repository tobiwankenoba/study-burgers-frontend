import { IngredientsTabs } from './components/ingredients-tabs';
import style from './styles.module.scss';
import { Ingredient } from './components/ingredient';
import { useCallback, useEffect, useState } from 'react';
import { fetchIngredients } from '@services/fetchIngredients';
import { TIngredient, TPreparedIngredients } from '../../types/ingredients';
import { clsx } from 'clsx';
import { ModalInfo } from './components/modal-info';

interface IBurgerIngredientsProps {
	onModalContent: (content: JSX.Element) => void;
}

export const BurgerIngredients: React.FC<IBurgerIngredientsProps> = ({
	onModalContent,
}) => {
	const [ingredients, setIngredients] = useState<TPreparedIngredients[]>();

	useEffect(() => {
		(async () => {
			const result = await fetchIngredients();

			setIngredients(result);
		})();
	}, []);

	const handleClickIngredient = useCallback(
		(ingredient: TIngredient) => {
			onModalContent(<ModalInfo ingredient={ingredient} />);
		},
		[onModalContent]
	);

	if (!ingredients) {
		return null;
	}

	return (
		<article className={style.container}>
			<div className={'mb-5 text text_type_main-large'}>Соберите бургер</div>
			<IngredientsTabs />
			<article className={clsx(style.list, 'pt-10')}>
				{ingredients.map(({ title, items }, index) => (
					<div key={index} className={style.item}>
						<div className='text text_type_main-medium mb-6'>{title}</div>
						<div className={style.itemsList}>
							{items.map((item, index) => (
								<Ingredient
									onClick={() => handleClickIngredient(item)}
									key={index}
									{...item}
								/>
							))}
						</div>
					</div>
				))}
			</article>
		</article>
	);
};
