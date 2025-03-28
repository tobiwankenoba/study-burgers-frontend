import { clsx } from 'clsx';
import { TIngredient } from '../../../../types/ingredients';
import style from './styles.module.scss';

interface IModalInfoProps {
	ingredient: TIngredient;
}

export const ModalInfo: React.FC<IModalInfoProps> = ({ ingredient }) => {
	return (
		<div className={clsx(style.container, 'p-10')}>
			<div className='text text_type_main-large'>Детали ингредиента</div>
			<div className={style.wrapper}>
				<img
					src={ingredient.bigImage}
					className={clsx(style.image, 'pb-4')}
					alt={ingredient.title}
				/>
				<div className={'text text_type_main-medium pb-8'}>
					{ingredient.title}
				</div>
				<div className={style.info}>
					<div
						className={clsx(
							style.infoItem,
							'text text_type_main-default text_color_inactive'
						)}>
						<div>Калории,ккал</div>
						<div className='text text_type_digits-default'>
							{ingredient.calories}
						</div>
					</div>
					<div
						className={clsx(
							style.infoItem,
							'text text_type_main-default text_color_inactive'
						)}>
						<div>Белки, г</div>
						<div className='text text_type_digits-default'>
							{ingredient.proteins}
						</div>
					</div>
					<div
						className={clsx(
							style.infoItem,
							'text text_type_main-default text_color_inactive'
						)}>
						<div>Жиры, г</div>
						<div className='text text_type_digits-default'>
							{ingredient.fat}
						</div>
					</div>
					<div
						className={clsx(
							style.infoItem,
							'text text_type_main-default text_color_inactive'
						)}>
						<div>Углеводы, г</div>
						<div className='text text_type_digits-default'>
							{ingredient.carbohydrates}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
