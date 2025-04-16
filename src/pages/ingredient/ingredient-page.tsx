import styles from './styles.module.scss';
import { ModalInfo } from '@components/modal-info';

export const IngredientPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<ModalInfo />
		</div>
	);
};
