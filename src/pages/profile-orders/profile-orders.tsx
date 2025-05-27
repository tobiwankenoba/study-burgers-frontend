import styles from './styles.module.scss';
import { ProfileNav } from '@components/profile-nav';
import { OrdersList } from '@components/orders-list';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { connect } from '../../actions/profileOrders';
import { useSelector } from '../../types/redux';
import { selectProfileOrderInfo } from '../../selectors/select-profile-orders-info';
import { useToggleState } from '../../hooks/useToggle';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from '@components/modal';

interface IProfileOrdersContentProps {
	contentModal?: JSX.Element | null;
}

export const ProfileOrders: React.FC<IProfileOrdersContentProps> = ({
	contentModal = null,
}) => {
	const { state: modalOpen, toggle: toggleModalOpen } = useToggleState(
		Boolean(contentModal)
	);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const location = useLocation();

	const { orders } = useSelector(selectProfileOrderInfo);

	useEffect(() => {
		dispatch(connect('wss://norma.nomoreparties.space/orders'));
	}, [dispatch]);

	const handleCloseModal = useCallback(() => {
		toggleModalOpen();

		if (location.state?.backgroundLocation) {
			navigate(location.state?.backgroundLocation);
		}
	}, [location, navigate, toggleModalOpen]);

	return (
		<div className={styles.container}>
			<ProfileNav />
			<OrdersList
				pageType='profile'
				onClick={toggleModalOpen}
				orders={orders}
			/>
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
