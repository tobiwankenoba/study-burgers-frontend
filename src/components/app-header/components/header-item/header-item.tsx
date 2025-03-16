import { clsx } from 'clsx';
import style from './styles.module.scss';
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';
import { useToggleState } from '../../../../hooks/useToggle';

interface IHeaderItemProps {
	id: number;
	title: string;
	Icon: React.FC<TIconProps>;
	url: string;
	activeItemId: number;
	onClick: (id: number) => void;
}

export const HeaderItem: React.FC<IHeaderItemProps> = ({
	title,
	id,
	activeItemId,
	Icon,
	onClick,
}) => {
	const { state: isHovered, toggle: toggleIsHovered } = useToggleState();

	const isActiveItem = activeItemId === id;

	return (
		<li
			className={clsx(style.container, isActiveItem && style.active, 'p-4')}
			role='button'
			onClick={() => onClick(id)}
			onMouseEnter={toggleIsHovered}
			onMouseLeave={toggleIsHovered}>
			<div className={style.image}>
				<Icon type={isHovered || isActiveItem ? 'primary' : 'secondary'} />
			</div>
			<div className='text text_type_main-default'>{title}</div>
		</li>
	);
};
