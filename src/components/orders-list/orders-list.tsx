import styles from './styles.module.scss';
import { Order } from './components/order';
import { TOrderInfo } from '../../types/order';

interface IOrderListProps {
	orders: TOrderInfo[];
	pageType: 'profile' | 'feed';
	onClick: VoidFunction;
}

export const OrdersList: React.FC<IOrderListProps> = ({
	orders,
	pageType,
	onClick,
}) => {
	return (
		<div className={styles.list}>
			{orders.map((order) => (
				<Order
					pageType={pageType}
					onClick={onClick}
					{...order}
					key={order.number}
				/>
			))}
		</div>
	);
};
