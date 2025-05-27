import { OrdersList } from '@components/orders-list';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { connect } from '../../actions/orders';
import { useCallback, useEffect, useMemo } from 'react';
import { selectOrderInfo } from '../../selectors/select-orders-info';
import { useSelector } from '../../types/redux';
import { useToggleState } from '../../hooks/useToggle';
import { Modal } from '@components/modal';
import { useLocation, useNavigate } from 'react-router-dom';

interface IOrdersFeedProps {
	contentModal?: JSX.Element | null;
}

export const OrdersFeed: React.FC<IOrdersFeedProps> = ({
	contentModal = null,
}) => {
	const { state: modalOpen, toggle: toggleModalOpen } = useToggleState(
		Boolean(contentModal)
	);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const location = useLocation();

	const { total, totalToday, orders } = useSelector(selectOrderInfo);

	const doneOrders = useMemo(
		() => orders.filter((order) => order.status === 'done').slice(0, 10),
		[orders]
	);

	const pendingOrders = useMemo(
		() => orders.filter((order) => order.status === 'pending').slice(0, 10),
		[orders]
	);

	useEffect(() => {
		dispatch(connect('wss://norma.nomoreparties.space/orders/all'));
	}, [dispatch]);

	const handleCloseModal = useCallback(() => {
		toggleModalOpen();

		if (location.state?.backgroundLocation) {
			navigate(location.state?.backgroundLocation);
		}
	}, [location, navigate, toggleModalOpen]);

	return (
		<div className={styles.container}>
			<div className={'text text_type_main-large mb-6'}>Лента заказов</div>
			<div className={styles.info}>
				<OrdersList pageType='feed' onClick={toggleModalOpen} orders={orders} />
				<div className={styles.ordersInfo}>
					<div className={styles.ordersStatuses}>
						<div className={styles.orderStatus}>
							<div className={'text text_type_main-medium mb-6'}>Готовы:</div>
							<div className={styles.statusList}>
								{doneOrders.map((item, index) => (
									<div className='text text_type_digits-default' key={index}>
										{item.number}
									</div>
								))}
							</div>
						</div>
						<div className={styles.orderStatus}>
							<div className={'text text_type_main-medium mb-6'}>В работе:</div>
							<div className={styles.statusList}>
								{pendingOrders.map((item, index) => (
									<div key={index} className='text text_type_digits-default'>
										{item.number}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className={styles.ordersCount}>
						<div className={'text text_type_main-medium'}>
							Выполнено за все время:
						</div>
						<div className={'text text_type_digits-large'}>{total}</div>
					</div>
					<div className={styles.ordersCount}>
						<div className={'text text_type_main-medium'}>
							Выполнено за сегодня:
						</div>
						<div className={'text text_type_digits-large'}>{totalToday}</div>
					</div>
				</div>
			</div>
			{modalOpen && (
				<Modal
					open={modalOpen}
					onClose={handleCloseModal}
					content={contentModal}
				/>
			)}
		</div>
	);
};
