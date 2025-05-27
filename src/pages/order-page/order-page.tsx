import { ModalOrder } from '@components/modal-order/modal-order';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useEffect } from 'react';
import {
	connect as profileConnect,
	disconnect as profileDisconnect,
} from '../../actions/profileOrders';
import { connect, disconnect } from '../../actions/orders';

export const OrderPage: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(profileConnect('wss://norma.nomoreparties.space/orders'));

		dispatch(connect('wss://norma.nomoreparties.space/orders/all'));

		() => {
			dispatch(profileDisconnect());

			dispatch(disconnect());
		};
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<ModalOrder />
		</div>
	);
};
