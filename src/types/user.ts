export type TUser = {
	email: string;
	name: string;
};

export type TUserState = {
	user: TUser | null;
	isAuthChecked: boolean;
};
