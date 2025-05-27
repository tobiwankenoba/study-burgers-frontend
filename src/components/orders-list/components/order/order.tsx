/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
	CurrencyIcon,
	FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { TOrderInfo } from '../../../../types/order';
import { useSelector } from '../../../../types/redux';
import { selectIngredients } from '../../../../selectors';
import { Link, useLocation } from 'react-router-dom';

interface IOrderProps extends TOrderInfo {
	onClick: VoidFunction;
	pageType: 'profile' | 'feed';
}

export const Order: React.FC<IOrderProps> = ({
	number,
	updatedAt,
	name,
	ingredients,
	pageType,
	onClick,
}) => {
	const allIngredients = useSelector(selectIngredients);

	const slicedIngredients = ingredients.slice(0, 6);

	const location = useLocation();

	return (
		<Link
			to={`/${pageType === 'feed' ? 'feed' : 'profile/orders'}/${number}`}
			onClick={onClick}
			state={{ backgroundLocation: location }}
			className={styles.item}>
			<>
				<div className={styles.idContainer}>
					<div className={'text text_type_digits-default'}>{number}</div>
					<div className={'text text_type_main-default text_color_inactive'}>
						<FormattedDate date={new Date(updatedAt)} />
					</div>
				</div>
				<div
					className={clsx(
						styles.title,
						'text text_type_main-medium pt-3 pb-3'
					)}>
					{name}
				</div>
				<div className={styles.priceContainer}>
					<div className={styles.ingredients}>
						{slicedIngredients.map((item, index) => (
							<div
								key={index}
								className={clsx(
									styles.ingredient,
									index === slicedIngredients.length - 1 &&
										ingredients.length > 6 &&
										styles.last
								)}
								style={{ right: `${index * 3}%`, zIndex: `-${index}` }}>
								{ingredients.length > 6 &&
									index === slicedIngredients.length - 1 && (
										<div className={styles.otherCount}>
											+{ingredients.length - 6}
										</div>
									)}
							</div>
						))}
					</div>
					<div className={clsx(styles.price, 'text text_type_digits-medium')}>
						<div>
							{ingredients
								.map(
									(item) =>
										allIngredients.ingredients.find(
											(ing) => ing.privateId === item
										)?.price ?? 0
								)
								.reduce((acc, curr) => acc + curr, 0)}
						</div>
						<CurrencyIcon type='primary' />
					</div>
				</div>
			</>
		</Link>
	);
};
