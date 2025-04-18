import { clsx } from 'clsx';
import style from './styles.module.scss';
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';
import { useToggleState } from '../../../../hooks/useToggle';
import { NavLink } from 'react-router-dom';

interface IHeaderItemProps {
	title: string;
	Icon: React.FC<TIconProps>;
	url: string;
}

export const HeaderItem: React.FC<IHeaderItemProps> = ({
	title,
	Icon,
	url,
}) => {
	const { state: isHovered, toggle: toggleIsHovered } = useToggleState();

	return (
		<NavLink
			to={url}
			className={({ isActive }) =>
				clsx(style.container, isActive && style.active, 'p-4')
			}
			role='button'
			onMouseEnter={toggleIsHovered}
			onMouseLeave={toggleIsHovered}>
			{({ isActive }) => (
				<>
					<div className={style.image}>
						<Icon type={isHovered || isActive ? 'primary' : 'secondary'} />
					</div>
					<div className='text text_type_main-default'>{title}</div>
				</>
			)}
		</NavLink>
	);
};
