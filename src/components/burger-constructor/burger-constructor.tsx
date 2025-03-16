import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './styles.module.scss';
import { clsx } from 'clsx';
import { BurgerScrollItem } from './components/burger-scroll-item';
import { BurgerFixedItem } from './components/burger-fixed-item/burger-fixed-item';

export const BurgerConstructor: React.FC = () => {
	return (
		<article className={style.container}>
			<div className={clsx(style.constructorElements, 'mb-10')}>
				<BurgerFixedItem
					type='top'
					isLocked={true}
					text='Краторная булка N-200i (верх)'
					price={200}
					thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
				/>
				<div className={style.dynamicElements}>
					<BurgerScrollItem />
					<BurgerScrollItem />
					<BurgerScrollItem />
					<BurgerScrollItem />
					<BurgerScrollItem />
					<BurgerScrollItem />
					<BurgerScrollItem />
					<BurgerScrollItem />
				</div>
				<BurgerFixedItem
					type='bottom'
					isLocked={true}
					text='Краторная булка N-200i (низ)'
					price={200}
					thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
				/>
			</div>
			<div className={clsx(style.buttonContainer, 'pb-10 pr-5')}>
				<div className={clsx(style.price, 'text text_type_main-medium')}>
					610
				</div>
				<div className={style.btn}>
					<Button htmlType='button' type='primary' size='medium'>
						Нажми на меня
					</Button>
				</div>
			</div>
		</article>
	);
};
