import { TApplicationState } from '../../types/redux';
import { TUserState } from '../../types/user';

export const selectUser = (state: TApplicationState): TUserState => {
	return state.user;
};
