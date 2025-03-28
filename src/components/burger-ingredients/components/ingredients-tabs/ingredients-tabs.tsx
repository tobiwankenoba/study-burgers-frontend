import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { MutableRefObject } from 'react';
import { TABS } from '../../../../constants/tabs';
import style from './styles.module.scss';

type TIngredientsTabsProps = {
	tabsRef: MutableRefObject<HTMLDivElement | null>;
	active: string;
	onClick: (tab: string) => void;
};

export const IngredientsTabs: React.FC<TIngredientsTabsProps> = ({
	tabsRef,
	active,
	onClick,
}) => {
	return (
		<div ref={tabsRef} className={style.container}>
			{TABS.map(({ id, title }) => (
				<Tab key={id} value={title} active={active === title} onClick={onClick}>
					{title}
				</Tab>
			))}
		</div>
	);
};
