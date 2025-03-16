import { BurgerIngredients } from '@components/burger-ingredients';
import style from './styles.module.scss';
import { BurgerConstructor } from '@components/burger-constructor';
import { useToggleState } from '../../hooks/useToggle';
import { Modal } from '@components/modal';
import { useCallback, useState } from 'react';

export const Content: React.FC = () => {
	const { state: modalOpen, toggle: toggleModalOpen } = useToggleState();

	const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

	const handleModalContent = useCallback(
		(content: JSX.Element) => {
			setModalContent(content);
			toggleModalOpen();
		},
		[toggleModalOpen]
	);

	return (
		<main className={style.container}>
			<BurgerIngredients onModalContent={handleModalContent} />
			<BurgerConstructor onModalContent={handleModalContent} />
			<Modal
				open={modalOpen}
				onClose={toggleModalOpen}
				content={modalContent}
			/>
		</main>
	);
};
