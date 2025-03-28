import { Content } from '@components/content';
import style from './app.module.scss';
import { AppHeader } from '@components/app-header';

export const App = () => {
	return (
		<div className={style.container}>
			<AppHeader />
			<Content />
		</div>
	);
};
