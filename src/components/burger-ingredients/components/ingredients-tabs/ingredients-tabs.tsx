import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { TABS } from '../../../../constants/tabs';
import style from './styles.module.scss';

export const IngredientsTabs: React.FC = () => {
	const [current, setCurrent] = useState(TABS[0].title);

	return (
		<div className={style.container}>
			{TABS.map(({ id, title }) => (
				<Tab
					key={id}
					value={title}
					active={current === title}
					onClick={setCurrent}>
					{title}
				</Tab>
			))}
		</div>
	);
};
