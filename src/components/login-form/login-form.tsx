import {
	Button,
	Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { ERoutes } from '../../types/routes';
import { ChangeEvent, useState } from 'react';
import { useToggleState } from '../../hooks/useToggle';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { loginUserThunk } from '../../thunks/user';

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState<string>('');

	const [password, setPassword] = useState<string>('');

	const dispatch = useAppDispatch();

	const { state: isVisiblePassword, toggle: toggleIsVisiblePassword } =
		useToggleState();

	const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const handlePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const handleSubmit = async () => {
		await dispatch(loginUserThunk({ email, password }));
	};

	return (
		<div className={styles.container}>
			<p className='text text_type_main-medium'>Вход</p>
			<Input
				type='text'
				placeholder='E-mail'
				value={email}
				onChange={(e) => handleEmailValue(e)}
			/>
			<Input
				type={!isVisiblePassword ? 'password' : 'text'}
				icon={!isVisiblePassword ? 'ShowIcon' : 'HideIcon'}
				placeholder='Пароль'
				onIconClick={toggleIsVisiblePassword}
				value={password}
				onChange={(e) => handlePasswordValue(e)}
			/>
			<div className={clsx(styles.btnContainer, 'mb-20')}>
				<Button
					onClick={handleSubmit}
					htmlType='button'
					type='primary'
					size='medium'>
					Войти
				</Button>
			</div>
			<div className={styles.links}>
				<div className={'text text_type_main-default text_color_inactive'}>
					Вы — новый пользователь?{' '}
					<Link to={ERoutes.Register} className={styles.link}>
						Зарегистрироваться
					</Link>
				</div>
				<div className={'text text_type_main-default text_color_inactive'}>
					Забыли пароль?{' '}
					<Link to={ERoutes.ForgotPass} className={styles.link}>
						Восстановить пароль
					</Link>
				</div>
			</div>
		</div>
	);
};
