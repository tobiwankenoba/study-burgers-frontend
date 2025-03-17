import { clsx } from 'clsx';
import { HEADER_LINKS } from '../../constants/headerLinks';
import style from './styles.module.scss';

import { useState } from 'react';
import {
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { HeaderItem } from './components/header-item';

export const AppHeader: React.FC = () => {
	const [activeLinkId, setActiveLinkId] = useState(HEADER_LINKS[0].id);

	const handleActiveLinkId = (id: number) => {
		setActiveLinkId(id);
	};

	return (
		<header className={style.container}>
			<div className={clsx(style.wrapper, 'p-4')}>
				<ul className={style.links} role='menu'>
					{HEADER_LINKS.map((item) => (
						<HeaderItem
							onClick={handleActiveLinkId}
							activeItemId={activeLinkId}
							{...item}
							key={item.id}
						/>
					))}
				</ul>
				<div className={style.logo}>
					<Logo />
				</div>
				<div className={clsx(style.account, 'p-4')}>
					<ProfileIcon type='secondary' />
					<div
						className={clsx(
							style.accountTitle,
							'text text_type_main-default text_color_inactive'
						)}>
						Личный кабинет
					</div>
				</div>
			</div>
		</header>
	);
};
