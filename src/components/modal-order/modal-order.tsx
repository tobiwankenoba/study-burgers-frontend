import { clsx } from 'clsx';
import style from './styles.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../types/redux';
import { ModalIngredient } from './components/ingredient';
import {
	CurrencyIcon,
	FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { selectIngredients } from '../../selectors';

export const ModalOrder: React.FC = () => {
	const { id } = useParams();

	const allIngredients = useSelector(selectIngredients);

	const order = useSelector((state) => {
		let order = state.orders.ordersInfo.orders.find(
			(item) => item.number === Number(id)
		);

		if (order) {
			return order;
		}

		order = state.profileOrders.ordersInfo.orders.find(
			(item) => item.number === Number(id)
		);

		if (order) {
			return order;
		}

		return null;
	});

	if (!order) {
		return null;
	}

	return (
		<div className={clsx(style.container, 'p-10')}>
			<div className='text text_type_main-default mb-10'>#{order.number}</div>
			<div className={style.wrapper}>
				<div className='text text_type_main-medium mb-3'>{order.name}</div>
				<div className='text text_type_main-default text_color_inactive mb-15'>
					{order.status}
				</div>
				<div className='text text_type_main-medium mb-3'>Состав:</div>
				<div className={style.list}>
					{order.ingredients.map((item, index) => (
						<ModalIngredient key={index} id={item} />
					))}
				</div>
				<div className={style.priceContainer}>
					<div className='text text_type_main-default text_color_inactive'>
						<FormattedDate date={new Date(order.createdAt)} />
					</div>
					<div className={clsx(style.price, 'text text_type_main-medium')}>
						<CurrencyIcon type='primary' />
						{order.ingredients
							.map(
								(item) =>
									allIngredients.ingredients.find(
										(ing) => ing.privateId === item
									)?.price ?? 0
							)
							.reduce((acc, curr) => acc + curr, 0)}
					</div>
				</div>
			</div>
		</div>
	);
};
