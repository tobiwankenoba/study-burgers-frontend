import { ProfileForm } from '@components/profile-form';
import styles from './styles.module.scss';
import { ProfileNav } from '@components/profile-nav';

export const Profile: React.FC = () => {
	return (
		<div className={styles.container}>
			<ProfileNav />
			<ProfileForm />
		</div>
	);
};
