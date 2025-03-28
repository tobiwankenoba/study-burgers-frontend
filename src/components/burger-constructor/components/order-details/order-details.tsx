import { clsx } from 'clsx';
import style from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectOrderNumber } from '../../../../selectors';

export const OrderDetails: React.FC = () => {
	const orderNumber = useSelector(selectOrderNumber);

	return (
		<div className={clsx(style.container, 'p-10')}>
			<div className='text text_type_digits-large mb-8 '>{orderNumber}</div>
			<div className={style.wrapper}>
				<div className={'text text_type_main-medium pb-10'}>
					идентификатор заказа
				</div>
				<div className={clsx(style.image, 'mb-10')} />
				<div className='text text_type_main-default mb-2'>
					Ваш заказ начали готовить
				</div>
				<div className='text text_type_main-default text_color_inactive'>
					Дождитесь готовности на орбитальной станции
				</div>
			</div>
		</div>
	);
};
