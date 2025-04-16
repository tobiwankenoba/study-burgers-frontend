import { clsx } from 'clsx';
import { HEADER_LINKS } from '../../constants/headerLinks';
import style from './styles.module.scss';
import {
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { HeaderItem } from './components/header-item';

export const AppHeader: React.FC = () => {
	return (
		<header className={style.container}>
			<div className={clsx(style.wrapper, 'p-4')}>
				<div className={style.links} role='menu'>
					{HEADER_LINKS.map((item) => (
						<HeaderItem {...item} key={item.id} />
					))}
				</div>
				<div className={style.logo}>
					<Logo />
				</div>

				<HeaderItem url='/profile' title='Личный кабинет' Icon={ProfileIcon} />
			</div>
		</header>
	);
};
