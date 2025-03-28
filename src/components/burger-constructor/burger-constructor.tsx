import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './styles.module.scss';
import { clsx } from 'clsx';
import { BurgerScrollItem } from './components/burger-scroll-item';
import { BurgerFixedItem } from './components/burger-fixed-item/burger-fixed-item';
import { useCallback, useMemo } from 'react';
import { OrderDetails } from './components/order-details';
import { useSelector } from 'react-redux';
import { selectConstructorBurger } from '../../selectors';
import { BurgerScrollItemEmpty } from './components/burger-scroll-item-empty';
import { useDrop } from 'react-dnd';
import { EDrugTypeIngridients } from '../../types/ingredients';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
	removeIngridientThunk,
	setIngridientsThunk,
} from '../../thunks/constructorBurger';
import update from 'immutability-helper';
import { setAllIngridientsThunk } from '../../thunks/constructorBurger/setAllIngridients';
import { TConstructorIngredient } from '../../types/constructor';
import { createOrderThunk } from '../../thunks';

interface IBurgerConstructorProps {
	onModalContent: (content: JSX.Element) => void;
}

export const BurgerConstructor: React.FC<IBurgerConstructorProps> = ({
	onModalContent,
}) => {
	const { ingridients, bun } = useSelector(selectConstructorBurger);

	const dispatch = useAppDispatch();

	const [, dropRef] = useDrop({
		accept: EDrugTypeIngridients.Ingridient,
		drop(item) {
			dispatch(setIngridientsThunk(item as TConstructorIngredient));
		},
	});

	const handleRemoveIngridient = (id: number) => {
		dispatch(removeIngridientThunk(id));
	};

	const handleClickButton = useCallback(async () => {
		const prepareIngridients = ingridients.map((item) => item.privateId);

		await dispatch(
			createOrderThunk({
				ingredients: [bun.privateId, ...prepareIngridients, bun.privateId],
			})
		);

		onModalContent(<OrderDetails />);
	}, [bun.privateId, dispatch, ingridients, onModalContent]);

	const moveCard = useCallback(
		(dragIndex: number, hoverIndex: number) => {
			dispatch(
				setAllIngridientsThunk(
					update(ingridients, {
						$splice: [
							[dragIndex, 1],
							[hoverIndex, 0, ingridients[dragIndex] as TConstructorIngredient],
						],
					})
				)
			);
		},
		[dispatch, ingridients]
	);

	const finalPrice = useMemo(
		() =>
			bun.price * 2 + ingridients.reduce((acc, cur) => (acc += cur.price), 0),
		[bun.price, ingridients]
	);

	return (
		<article className={style.container}>
			<div className={clsx(style.constructorElements, 'mb-10')}>
				<BurgerFixedItem
					type='top'
					isLocked={true}
					price={bun.price}
					thumbnail={bun.image}
					text={bun.title}
				/>
				<div ref={dropRef} className={style.dynamicElements}>
					{ingridients.length > 0 &&
						ingridients.map((item, i) => (
							<BurgerScrollItem
								key={item.id}
								moveCard={moveCard}
								index={i}
								{...item}
								onRemove={handleRemoveIngridient}
							/>
						))}
					{ingridients.length === 0 && <BurgerScrollItemEmpty />}
				</div>
				<BurgerFixedItem
					type='bottom'
					isLocked={true}
					price={bun.price}
					thumbnail={bun.image}
					text={bun.title}
				/>
			</div>
			<div className={clsx(style.buttonContainer, 'pb-10 pr-5')}>
				<div className={clsx(style.price, 'text text_type_main-medium')}>
					{finalPrice}
				</div>
				<div className={style.btn}>
					<Button
						htmlType='button'
						onClick={handleClickButton}
						type='primary'
						size='medium'>
						Нажми на меня
					</Button>
				</div>
			</div>
		</article>
	);
};
