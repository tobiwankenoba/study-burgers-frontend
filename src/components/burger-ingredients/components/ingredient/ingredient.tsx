import { clsx } from 'clsx';
import style from './styles.module.scss';
import { useDrag } from 'react-dnd';
import {
	EDrugTypeBuns,
	EDrugTypeIngredients,
	TIngredient,
} from '../../../../types/ingredients';

import { selectConstructorBurger } from '../../../../selectors';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from '../../../../types/redux';

interface IIngredientProps {
	image: string;
	id: number;
	privateId: string;
	title: string;
	type: string;
	price: number;
	onClick: VoidFunction;
}

export const Ingredient: React.FC<IIngredientProps> = ({
	title,
	privateId,
	id,
	price,
	type,
	image,
	onClick,
}) => {
	const [, dragRef] = useDrag({
		type: type === 'bun' ? EDrugTypeBuns.Bun : EDrugTypeIngredients.Ingredient,
		item: { id, title, price, image, privateId } as TIngredient,
	});

	const location = useLocation();

	const { bun, ingredients } = useSelector(selectConstructorBurger);

	const counter = useMemo(
		() =>
			type === 'bun'
				? bun.privateId === privateId && 2
				: ingredients.filter((item) => item.privateId === privateId).length,
		[bun.privateId, ingredients, privateId, type]
	);

	return (
		<Link
			to={`/ingredients/${privateId}`}
			state={{ backgroundLocation: location }}
			ref={dragRef}
			className={clsx(style.item, 'p-4')}
			onClick={onClick}>
			{Number(counter) > 0 && <div className={style.counter}>{counter}</div>}
			<img src={image} alt='Картинка' className='mb-2' />
			<div className={clsx(style.price, 'text text_type_main-default mb-2')}>
				{price} <div className={style.icon} />
			</div>
			<div className='text text_type_main-default'>{title}</div>
		</Link>
	);
};
