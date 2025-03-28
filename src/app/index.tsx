import { Content } from '@components/content';
import style from './app.module.scss';
import { AppHeader } from '@components/app-header';
import { createReduxStore } from '@utils/redux';
import { TApplicationState } from '../types/redux';
import { Provider } from 'react-redux';
import { EIngridientStatus } from '../types/ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EOrderStatus } from '../types/order';

export const App = () => {
	const preloadedState: TApplicationState = {
		orderStatus: { status: EOrderStatus.Init },
		ingridientsState: { ingridients: [], status: EIngridientStatus.Loading },
		constructorState: {
			bun: {
				id: 0,
				title: '',
				price: 0,
				image: '',
				privateId: '',
			},
			ingridients: [],
		},
	};

	const store = createReduxStore(preloadedState, true);

	return (
		<Provider store={store}>
			<DndProvider backend={HTML5Backend}>
				<div className={style.container}>
					<AppHeader />
					<Content />
				</div>
			</DndProvider>
		</Provider>
	);
};
