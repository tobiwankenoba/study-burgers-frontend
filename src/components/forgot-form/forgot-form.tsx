import {
	Button,
	Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.scss';
import { ERoutes } from '../../types/routes';
import { clsx } from 'clsx';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { forgotPasswordThunk } from '../../thunks/user';

export const ForgotForm: React.FC = () => {
	const [email, setEmail] = useState<string>('');

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const handleSubmit = async (
		e: SyntheticEvent<HTMLFormElement, SubmitEvent>
	) => {
		e.preventDefault();
		const res = await dispatch(forgotPasswordThunk({ email }));
		if (res.payload) {
			localStorage.setItem('afterForgotPage', 'true');

			navigate('/reset-password');
		}
	};

	return (
		<form onSubmit={handleSubmit} className={styles.container}>
			<p className='text text_type_main-medium'>Восстановление пароля</p>
			<Input
				type='text'
				placeholder='Укажите e-mail'
				value={email}
				onChange={(e) => handleEmailValue(e)}
			/>

			<div className={clsx(styles.btnContainer, 'mb-20')}>
				<Button htmlType='submit' type='primary' size='medium'>
					Восстановить
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
		</form>
	);
};
