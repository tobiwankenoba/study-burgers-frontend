import {
	Button,
	Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.scss';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useToggleState } from '../../hooks/useToggle';
import { useSelector } from 'react-redux';
import { selectUser } from '../../selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { updateUserThunk } from '../../thunks/user/updateUser';

export const ProfileForm: React.FC = () => {
	const { user } = useSelector(selectUser);

	const dispatch = useAppDispatch();

	const { state: isDisabled, toggle: toggleIsDisabled } = useToggleState(true);

	const [login, setLogin] = useState<string>(user?.name as string);

	const [email, setEmail] = useState<string>(user?.email as string);

	const [password, setPassword] = useState<string>('');

	const handleLoginValue = (e: ChangeEvent<HTMLInputElement>) => {
		setLogin(e.currentTarget.value);
	};

	const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const handlePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const handleSaveInfoUser = async (
		e: SyntheticEvent<HTMLFormElement, SubmitEvent>
	) => {
		e.preventDefault();
		await dispatch(updateUserThunk({ email, password, name: login }));
		toggleIsDisabled();
	};

	return (
		<form onSubmit={handleSaveInfoUser} className={styles.container}>
			<Input
				disabled={isDisabled}
				icon={isDisabled ? 'EditIcon' : undefined}
				onIconClick={toggleIsDisabled}
				type='text'
				placeholder='Имя'
				value={login}
				onChange={(e) => handleLoginValue(e)}
			/>
			<Input
				disabled={isDisabled}
				icon={isDisabled ? 'EditIcon' : undefined}
				onIconClick={toggleIsDisabled}
				type='text'
				placeholder='E-mail'
				value={email}
				onChange={(e) => handleEmailValue(e)}
			/>
			<Input
				disabled={isDisabled}
				type='text'
				icon={isDisabled ? 'EditIcon' : undefined}
				placeholder='Пароль'
				onIconClick={toggleIsDisabled}
				value={password}
				onChange={(e) => handlePasswordValue(e)}
			/>
			{!isDisabled && (
				<Button htmlType='submit' type='primary' size='medium' width={200}>
					Сохранить
				</Button>
			)}
		</form>
	);
};
