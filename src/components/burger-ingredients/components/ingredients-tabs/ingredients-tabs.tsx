import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { TABS } from '../../../../constants/tabs';

export const IngredientsTabs: React.FC = () => {
	const [current, setCurrent] = useState(TABS[0].title);

	return (
		<div style={{ display: 'flex' }}>
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
