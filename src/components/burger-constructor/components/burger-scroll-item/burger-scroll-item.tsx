import style from './styles.module.scss';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

export const BurgerScrollItem: React.FC = () => {
	return (
		<div className={style.container}>
			<div className={style.dragNDrop} />
			<ConstructorElement
				text='Краторная булка N-200i (верх)'
				price={50}
				thumbnail={'https://code.s3.yandex.net/react/code/meat-03-mobile.png'}
			/>
		</div>
	);
};
