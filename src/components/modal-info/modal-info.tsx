import { clsx } from 'clsx';
import style from './styles.module.scss';
import { useParams } from 'react-router-dom';

import { selectIngredients } from '../../selectors';
import { useSelector } from '../../types/redux';

export const ModalInfo: React.FC = () => {
	const { id } = useParams();

	const { ingredients } = useSelector(selectIngredients);

	const ingredient = ingredients.find((item) => item.privateId === id);

	if (!ingredient) {
		return null;
	}

	return (
		<div
			className={clsx(style.container, 'p-10')}
			data-testid='ingredientDetails'>
			<div className='text text_type_main-large'>Детали ингредиента</div>
			<div className={style.wrapper}>
				<img
					src={ingredient?.bigImage}
					className={clsx(style.image, 'pb-4')}
					alt={ingredient?.title}
				/>
				<div className={'text text_type_main-medium pb-8'}>
					{ingredient?.title}
				</div>
				<div className={style.info}>
					<div
						className={clsx(
							style.infoItem,
							'text text_type_main-default text_color_inactive'
						)}>
						<div>Калории,ккал</div>
						<div className='text text_type_digits-default'>
							{ingredient?.calories}
						</div>
					</div>
					<div
						className={clsx(
							style.infoItem,
							'text text_type_main-default text_color_inactive'
						)}>
						<div>Белки, г</div>
						<div className='text text_type_digits-default'>
							{ingredient?.proteins}
						</div>
					</div>
					<div
						className={clsx(
							style.infoItem,
							'text text_type_main-default text_color_inactive'
						)}>
						<div>Жиры, г</div>
						<div className='text text_type_digits-default'>
							{ingredient?.fat}
						</div>
					</div>
					<div
						className={clsx(
							style.infoItem,
							'text text_type_main-default text_color_inactive'
						)}>
						<div>Углеводы, г</div>
						<div className='text text_type_digits-default'>
							{ingredient?.carbohydrates}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
