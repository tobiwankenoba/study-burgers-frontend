import { BurgerIngredients } from '@components/burger-ingredients';
import style from './styles.module.scss';
import { BurgerConstructor } from '@components/burger-constructor';
import { useToggleState } from '../../hooks/useToggle';
import { Modal } from '@components/modal';
import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IHomeContentProps {
	contentModal?: JSX.Element | null;
}

export const HomeContent: React.FC<IHomeContentProps> = ({
	contentModal = null,
}) => {
	const { state: modalOpen, toggle: toggleModalOpen } = useToggleState(
		Boolean(contentModal)
	);

	const navigate = useNavigate();

	const location = useLocation();

	const [modalContent, setModalContent] = useState<JSX.Element | null>(
		contentModal
	);

	const handleModalContent = useCallback(
		(content: JSX.Element) => {
			setModalContent(content);

			toggleModalOpen();
		},
		[toggleModalOpen]
	);

	const handleCloseModal = useCallback(() => {
		toggleModalOpen();

		if (location.state?.backgroundLocation) {
			navigate(location.state?.backgroundLocation);
		}
	}, [location, navigate, toggleModalOpen]);

	return (
		<main className={style.container}>
			<BurgerIngredients onModalContent={handleModalContent} />
			<BurgerConstructor onModalContent={handleModalContent} />
			{modalOpen && (
				<Modal
					open={modalOpen}
					onClose={handleCloseModal}
					content={modalContent}
				/>
			)}
		</main>
	);
};
