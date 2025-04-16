import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logoutUserThunk } from '../../thunks/user';
import { useNavigate, NavLink } from 'react-router-dom';
import { PROFILE_NAV } from './constants';

export const ProfileNav: React.FC = () => {
	const dispatch = useAppDispatch();

	const navigation = useNavigate();

	const handleLogout = async () => {
		const res = await dispatch(logoutUserThunk());

		if (res.payload) {
			navigation('/login');
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.navigation}>
				{PROFILE_NAV.map(({ text, url }, index) => (
					<NavLink
						key={index}
						to={url}
						className={({ isActive }) =>
							clsx(
								styles.link,
								'text text_type_main-medium',
								'text_color_inactive',
								isActive && styles.active
							)
						}
						end={true}>
						{text}
					</NavLink>
				))}
				<button
					onClick={handleLogout}
					className={clsx(
						styles.link,
						'text text_type_main-medium text_color_inactive'
					)}>
					Выход
				</button>
			</div>
			<div
				className={clsx(
					styles.notice,
					'text text_type_main-default text_color_inactive'
				)}>
				В этом разделе вы можете изменить&nbsp;свои персональные данные
			</div>
		</div>
	);
};
