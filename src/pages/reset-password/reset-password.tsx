import { ResetForm } from '@components/reset-password/reset-form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ResetPassword: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const afterForgotPage = localStorage.getItem('afterForgotPage');

		if (!afterForgotPage) {
			navigate('/forgot-password');
		}
	}, [navigate]);

	return (
		<div>
			<ResetForm />
		</div>
	);
};
