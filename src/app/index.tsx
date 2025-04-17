import { Route, Routes, useLocation } from 'react-router-dom';
import style from './styles.module.scss';
import { AppHeader } from '@components/app-header';
import { NotFound } from '@pages/not-found';
import { IngredientPage } from '@pages/ingredient';
import { LoginPage } from '@pages/login-page';
import { RegisterPage } from '@pages/register-page';
import { ForgotPassword } from '@pages/forgot-password';
import { ResetPassword } from '@pages/reset-password';
import { Profile } from '@pages/profile';
import { ModalInfo } from '@components/modal-info';
import { HomePage } from '@pages/home';
import { ERoutes } from '../types/routes';
import { OnlyAuth, OnlyUnAuth } from '@components/protected-route';
import { ProfileOders } from '@pages/profile-orders';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { ingredientsThunk } from '../thunks';
import { getUserThunk } from '../thunks/user/getUser';

export const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(ingredientsThunk());

		dispatch(getUserThunk());
	}, [dispatch]);

	const location = useLocation();

	const content = location.state?.backgroundLocation ? (
		<Routes>
			<Route
				path={ERoutes.Ingredient}
				element={<HomePage contentModal={<ModalInfo />} />}
			/>
		</Routes>
	) : (
		<Routes location={location.state?.backgroundLocation || location}>
			<Route path={ERoutes.Ingredient} element={<IngredientPage />} />
			<Route
				path={ERoutes.Login}
				element={<OnlyUnAuth component={<LoginPage />} />}
			/>
			<Route
				path={ERoutes.Register}
				element={<OnlyUnAuth component={<RegisterPage />} />}
			/>
			<Route path={ERoutes.ForgotPass} element={<ForgotPassword />} />
			<Route path={ERoutes.ResetPass} element={<ResetPassword />} />
			<Route path={ERoutes.Profile}>
				<Route index element={<OnlyAuth component={<Profile />} />} />
				<Route
					path={ERoutes.ProfileOrders}
					element={<OnlyAuth component={<ProfileOders />} />}
				/>
			</Route>

			<Route index path={ERoutes.Main} element={<HomePage />} />
			<Route path={ERoutes.NotFound} element={<NotFound />} />
		</Routes>
	);

	return (
		<div className={style.container}>
			<AppHeader />
			<div className={style.contentContainer}>{content}</div>
		</div>
	);
};
