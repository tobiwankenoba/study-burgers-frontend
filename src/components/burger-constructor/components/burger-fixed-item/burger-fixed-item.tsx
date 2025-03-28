import style from './styles.module.scss';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

interface IBurgerFixedItemProps {
	type: 'top' | 'bottom' | undefined;
	isLocked: boolean;
	text: string;
	price: number;
	thumbnail: string;
}

export const BurgerFixedItem: React.FC<IBurgerFixedItemProps> = ({
	type,
	isLocked,
	text,
	price,
	thumbnail,
}) => {
	return (
		<div className={style.container}>
			<ConstructorElement
				type={type}
				isLocked={isLocked}
				text={text}
				price={price}
				thumbnail={thumbnail}
			/>
		</div>
	);
};
