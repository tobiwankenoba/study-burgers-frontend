export type TCreateUserResponse200 = {
	success: boolean;
	user: {
		email: string;
		name: string;
	};
	accessToken: string;
	refreshToken: string;
};
