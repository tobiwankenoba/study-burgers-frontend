import {
	Button,
	Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.scss';
import { ERoutes } from '../../types/routes';
import { clsx } from 'clsx';
import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToggleState } from '../../hooks/useToggle';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { resetPasswordThunk } from '../../thunks/user';

export const ResetForm: React.FC = () => {
	const [password, setPassword] = useState<string>('');

	const [pin, setPin] = useState<string>('');

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const { state: isVisiblePassword, toggle: toggleIsVisiblePassword } =
		useToggleState();

	const handlePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const handlePinValue = (e: ChangeEvent<HTMLInputElement>) => {
		setPin(e.currentTarget.value);
	};

	const handleSubmit = async () => {
		const res = await dispatch(resetPasswordThunk({ password, token: pin }));
		if (res.payload) {
			localStorage.removeItem('afterForgotPage');

			navigate('/login');
		}
	};

	return (
		<div className={styles.container}>
			<p className='text text_type_main-medium'>Восстановление пароля</p>
			<Input
				type={!isVisiblePassword ? 'password' : 'text'}
				icon={!isVisiblePassword ? 'ShowIcon' : 'HideIcon'}
				placeholder='Введите новый пароль'
				onIconClick={toggleIsVisiblePassword}
				value={password}
				onChange={(e) => handlePasswordValue(e)}
			/>
			<Input
				type='text'
				placeholder='Введите код из письма'
				value={pin}
				onChange={(e) => handlePinValue(e)}
			/>

			<div className={clsx(styles.btnContainer, 'mb-20')}>
				<Button
					onClick={handleSubmit}
					htmlType='button'
					type='primary'
					size='medium'>
					Сохранить
				</Button>
			</div>
			<div className={styles.links}>
				<div className={'text text_type_main-default text_color_inactive'}>
					Вспомнили пароль?{' '}
					<Link to={ERoutes.Login} className={styles.link}>
						Войти
					</Link>
				</div>
			</div>
		</div>
	);
};
