import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { TApplicationState } from './types/redux';
import { EOrderStatus } from './types/order';
import { EIngredientStatus } from './types/ingredients';
import { createReduxStore } from '@utils/redux';
import { DndProvider } from 'react-dnd';
import { Provider } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { fetchIngredients } from '@services/fetch-ingredients';
import { getUserInfo } from '@services/get-user/service';

(async () => {
	const domNode = document.getElementById('root') as HTMLDivElement;
	const root = createRoot(domNode);

	const ingredients = await fetchIngredients();

	const user = await getUserInfo();

	console.log(user);

	const preloadedState: TApplicationState = {
		orderStatus: { status: EOrderStatus.Init },
		user,
		ingredientsState: {
			ingredients: ingredients,
			status: EIngredientStatus.Loading,
		},
		constructorState: {
			bun: {
				id: 0,
				title: '',
				price: 0,
				image: '',
				privateId: '',
			},
			ingredients: [],
		},
	};

	const store = createReduxStore(preloadedState, true);

	root.render(
		<StrictMode>
			<Provider store={store}>
				<DndProvider backend={HTML5Backend}>
					<Router>
						<App />
					</Router>
				</DndProvider>
			</Provider>
		</StrictMode>
	);
})();
