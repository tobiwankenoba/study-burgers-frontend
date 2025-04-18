import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './styles.module.scss';
import { clsx } from 'clsx';
import { BurgerScrollItem } from './components/burger-scroll-item';
import { BurgerFixedItem } from './components/burger-fixed-item/burger-fixed-item';
import { useCallback, useMemo } from 'react';
import { OrderDetails } from './components/order-details';
import { useSelector } from 'react-redux';
import { selectConstructorBurger, selectUser } from '../../selectors';
import { BurgerScrollItemEmpty } from './components/burger-scroll-item-empty';
import { useDrop } from 'react-dnd';
import { EDrugTypeIngredients } from '../../types/ingredients';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import update from 'immutability-helper';
import { TConstructorIngredient } from '../../types/constructor';
import { createOrderThunk } from '../../thunks';
import {
	removeIngredient,
	setAllIngredient,
	setIngredient,
} from '../../slices';
import { useNavigate } from 'react-router-dom';

interface IBurgerConstructorProps {
	onModalContent: (content: JSX.Element) => void;
}

export const BurgerConstructor: React.FC<IBurgerConstructorProps> = ({
	onModalContent,
}) => {
	const { ingredients, bun } = useSelector(selectConstructorBurger);

	const { user } = useSelector(selectUser);

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const [, dropRef] = useDrop({
		accept: EDrugTypeIngredients.Ingredient,
		drop(item) {
			dispatch(setIngredient(item as TConstructorIngredient));
		},
	});

	const handleRemoveIngredient = (id: number) => {
		dispatch(removeIngredient(id));
	};

	const handleClickButton = useCallback(async () => {
		if (!user) {
			navigate('/login');
		}

		const prepareIngredients = ingredients.map((item) => item.privateId);

		await dispatch(
			createOrderThunk({
				ingredients: [bun.privateId, ...prepareIngredients, bun.privateId],
			})
		);

		onModalContent(<OrderDetails />);
	}, [bun.privateId, dispatch, ingredients, navigate, onModalContent, user]);

	const moveCard = useCallback(
		(dragIndex: number, hoverIndex: number) => {
			dispatch(
				setAllIngredient(
					update(ingredients, {
						$splice: [
							[dragIndex, 1],
							[hoverIndex, 0, ingredients[dragIndex] as TConstructorIngredient],
						],
					})
				)
			);
		},
		[dispatch, ingredients]
	);

	const finalPrice = useMemo(
		() =>
			bun.price * 2 + ingredients.reduce((acc, cur) => (acc += cur.price), 0),
		[bun.price, ingredients]
	);

	return (
		<article className={style.container}>
			<div className={clsx(style.constructorElements, 'mb-10')}>
				<BurgerFixedItem
					type='top'
					isLocked={true}
					price={bun.price}
					thumbnail={bun.image}
					text={bun.title + ' (верх)'}
				/>
				<div ref={dropRef} className={style.dynamicElements}>
					{ingredients.length > 0 &&
						ingredients.map((item, i) => (
							<BurgerScrollItem
								key={i}
								moveCard={moveCard}
								index={i}
								{...item}
								onRemove={handleRemoveIngredient}
							/>
						))}
					{ingredients.length === 0 && <BurgerScrollItemEmpty />}
				</div>
				<BurgerFixedItem
					type='bottom'
					isLocked={true}
					price={bun.price}
					thumbnail={bun.image}
					text={bun.title + ' (низ)'}
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
