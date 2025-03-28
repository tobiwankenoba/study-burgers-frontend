import { clsx } from 'clsx';
import style from './styles.module.scss';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from 'react-dnd';
import { EDrugTypeBuns } from '../../../../types/ingredients';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { setBunThunk } from '../../../../thunks/constructorBurger';
import { TConstructorIngredient } from '../../../../types/constructor';

interface IBurgerFixedItemProps {
	type: 'top' | 'bottom' | undefined;
	isLocked: boolean;
	text?: string;
	price?: number;
	thumbnail?: string;
}

export const BurgerFixedItem: React.FC<IBurgerFixedItemProps> = ({
	type,
	isLocked,
	text,
	price,
	thumbnail,
}) => {
	const dispatch = useAppDispatch();

	const [, dropTarget] = useDrop({
		accept: EDrugTypeBuns.Bun,
		drop(item) {
			console.log(item);
			dispatch(setBunThunk(item as TConstructorIngredient));
		},
	});

	if (!text || !price || !thumbnail) {
		return (
			<div ref={dropTarget} className={style.container}>
				<div
					className={clsx(
						style.empty,
						type === 'top' ? style.top : style.bottom
					)}>
					Выберите булку
				</div>
			</div>
		);
	}

	return (
		<div ref={dropTarget} className={style.container}>
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
