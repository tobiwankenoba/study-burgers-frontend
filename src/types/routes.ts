export enum ERoutes {
	Login = '/login',
	Register = '/register',
	ForgotPass = '/forgot-password',
	ResetPass = '/reset-password',
	Orders = '/feed',
	Order = '/feed/:id',
	Profile = '/profile',
	ProfileOrders = '/profile/orders',
	ProfileOrder = '/profile/orders/:id',
	NotFound = '*',
	Main = '/',
	Ingredient = '/ingredients/:id',
}
