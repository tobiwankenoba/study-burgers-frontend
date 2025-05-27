import { OrdersFeed } from '@components/orders-feed';
import styles from './styles.module.scss';

interface IOrdersContentProps {
	contentModal?: JSX.Element | null;
}

export const Orders: React.FC<IOrdersContentProps> = (props) => {
	return (
		<div className={styles.container}>
			<OrdersFeed {...props} />
		</div>
	);
};
