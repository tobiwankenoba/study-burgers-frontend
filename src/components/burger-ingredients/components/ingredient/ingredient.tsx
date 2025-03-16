import { clsx } from 'clsx';
import style from './styles.module.scss';

interface IIngredientProps {
	image: string;
	title: string;
	price: number;
	onClick: VoidFunction;
}

export const Ingredient: React.FC<IIngredientProps> = ({
	title,
	price,
	image,
	onClick,
}) => {
	return (
		<article
			role='menuitem'
			className={clsx(style.item, 'p-4')}
			onClick={onClick}>
			<img src={image} alt='Картинка' className='mb-2' />
			<div className={clsx(style.price, 'text text_type_main-default mb-2')}>
				{price} <div className={style.icon} />
			</div>
			<div className='text text_type_main-default'>{title}</div>
		</article>
	);
};
