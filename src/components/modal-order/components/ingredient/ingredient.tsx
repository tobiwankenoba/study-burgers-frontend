import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { selectIngredients } from '../../../../selectors';
import { useSelector } from '../../../../types/redux';
import style from './styles.module.scss';
import { clsx } from 'clsx';

type TModalIngredientProps = {
	id: string;
};

export const ModalIngredient: React.FC<TModalIngredientProps> = ({ id }) => {
	const allIngredients = useSelector(selectIngredients);

	const item = allIngredients.ingredients.find((item) => item.privateId === id);

	if (item === null) {
		return null;
	}

	return (
		<div className={style.item}>
			<div className={style.itemImage}>
				<img src={item?.smallImage} alt={item?.title} />
			</div>
			<div className={style.title}>{item?.title}</div>
			<div className={clsx(style.price, 'text text_type_main-medium')}>
				<CurrencyIcon type='primary' /> {item?.price}
			</div>
		</div>
	);
};
