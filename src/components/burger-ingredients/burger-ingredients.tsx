import { IngredientsTabs } from './components/ingredients-tabs';
import style from './styles.module.scss';
import { Ingredient } from './components/ingredient';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ETabs, TIngredient } from '../../types/ingredients';
import { clsx } from 'clsx';
import { ModalInfo } from './components/modal-info';
import { useSelector } from 'react-redux';
import { selectIngridients } from '../../selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ingridientsThunk } from '../../thunks';
import { TABS } from '../../constants/tabs';
import { computeBounding } from '@utils/computeBounding';

interface IBurgerIngredientsProps {
	onModalContent: (content: JSX.Element) => void;
}

export const BurgerIngredients: React.FC<IBurgerIngredientsProps> = ({
	onModalContent,
}) => {
	const tabsRef = useRef<HTMLDivElement>(null);

	const bunsRef = useRef<HTMLDivElement>(null);

	const sausagesRef = useRef<HTMLDivElement>(null);

	const ingredientsRef = useRef<HTMLDivElement>(null);

	const [activeTab, setActiveTab] = useState(TABS[0].title);

	const { ingridients } = useSelector(selectIngridients);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(ingridientsThunk());
	}, [dispatch]);

	const refsArray = [
		{
			title: ETabs.Buns,
			ref: bunsRef,
		},
		{
			title: ETabs.Sausages,
			ref: sausagesRef,
		},
		{
			title: ETabs.Ingredients,
			ref: ingredientsRef,
		},
	];

	const handleScroll = () => {
		const computedBunsY = computeBounding(tabsRef, bunsRef);

		const computedSausagesY = computeBounding(tabsRef, sausagesRef);

		const computedIngredientsY = computeBounding(tabsRef, ingredientsRef);

		const minValue = Math.min(
			computedBunsY,
			computedSausagesY,
			computedIngredientsY
		);

		setActiveTab(() => {
			switch (minValue) {
				case computedBunsY:
				default:
					return ETabs.Buns;
				case computedSausagesY:
					return ETabs.Sausages;
				case computedIngredientsY:
					return ETabs.Ingredients;
			}
		});
	};

	const handleClickTab = useCallback((tab: string) => {
		switch (tab) {
			case ETabs.Buns:
			default:
				bunsRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case ETabs.Sausages:
				sausagesRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case ETabs.Ingredients:
				ingredientsRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
		}

		setActiveTab(tab);
	}, []);

	const handleClickIngredient = useCallback(
		(ingredient: TIngredient) => {
			onModalContent(<ModalInfo ingredient={ingredient} />);
		},
		[onModalContent]
	);

	if (!ingridients) {
		return null;
	}

	return (
		<article className={style.container}>
			<div className={'mb-5 text text_type_main-large'}>Соберите бургер</div>
			<IngredientsTabs
				tabsRef={tabsRef}
				active={activeTab}
				onClick={handleClickTab}
			/>
			<article onScroll={handleScroll} className={clsx(style.list, 'pt-10')}>
				{ingridients.map(({ title, items }, index) => (
					<div key={index} className={style.item}>
						<div
							ref={refsArray.find((item) => item.title === title)?.ref}
							className='text text_type_main-medium mb-6'>
							{title}
						</div>
						<div className={style.itemsList}>
							{items.map((item, index) => (
								<Ingredient
									onClick={() => handleClickIngredient(item)}
									key={index}
									{...item}
								/>
							))}
						</div>
					</div>
				))}
			</article>
		</article>
	);
};
