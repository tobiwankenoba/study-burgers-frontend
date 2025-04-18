import {
	Button,
	Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { ERoutes } from '../../types/routes';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useToggleState } from '../../hooks/useToggle';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { createUserThunk } from '../../thunks/user';

export const RegisterForm: React.FC = () => {
	const [login, setLogin] = useState<string>('');

	const [email, setEmail] = useState<string>('');

	const [password, setPassword] = useState<string>('');

	const dispatch = useAppDispatch();

	const { state: isVisiblePassword, toggle: toggleIsVisiblePassword } =
		useToggleState();

	const handleLoginValue = (e: ChangeEvent<HTMLInputElement>) => {
		setLogin(e.currentTarget.value);
	};

	const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const handlePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const handleClickBtn = async (
		e: SyntheticEvent<HTMLFormElement, SubmitEvent>
	) => {
		e.preventDefault();
		await dispatch(createUserThunk({ email, password, name: login }));
	};

	return (
		<form onSubmit={handleClickBtn} className={styles.container}>
			<p className='text text_type_main-medium'>Регистрация</p>
			<Input
				type='text'
				placeholder='Имя'
				value={login}
				onChange={(e) => handleLoginValue(e)}
			/>
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
				<Button htmlType='submit' type='primary' size='medium'>
					Зарегистрироваться
				</Button>
			</div>
			<div className={styles.links}>
				<div className={'text text_type_main-default text_color_inactive'}>
					Уже зарегистрированы?{' '}
					<Link to={ERoutes.Login} className={styles.link}>
						Войти
					</Link>
				</div>
			</div>
		</form>
	);
};
