import { BurgerIngredients } from '@components/burger-ingredients';
import style from './styles.module.scss';
import { BurgerConstructor } from '@components/burger-constructor';

export const Content: React.FC = () => {
	return (
		<main className={style.container}>
			<BurgerIngredients />
			<BurgerConstructor />
		</main>
	);
};
