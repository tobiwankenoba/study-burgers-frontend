import { userReducer, initialState } from '../user-slice';
import {
	createUserThunk,
	loginUserThunk,
	logoutUserThunk,
} from '../../../thunks/user';
import { TUserState } from '../../../types/user';
import { getUserThunk } from '../../../thunks/user/getUser';

const userMock: TUserState = {
	isAuthChecked: false,
	user: {
		email: 'email',
		name: 'name',
	},
};

describe('userSlice', () => {
	it('Должен вернуть initialState', () => {
		expect(userReducer(undefined, { type: '' })).toEqual(initialState);
	});

	describe('loginUserThunk', () => {
		it('Должен вернуть юзера', () => {
			expect(
				userReducer(undefined, {
					type: loginUserThunk.fulfilled.type,
					payload: userMock,
				})
			).toEqual({
				...initialState,
				user: userMock.user,
			});
		});

		it('Должен вернуть null', () => {
			expect(
				userReducer(undefined, {
					type: loginUserThunk.rejected.type,
				})
			).toEqual({
				...initialState,
				user: null,
			});
		});

		it('Должен вернуть пустой список во время загрузки', () => {
			expect(
				userReducer(undefined, {
					type: loginUserThunk.pending.type,
				})
			).toEqual({
				...initialState,
				user: null,
			});
		});
	});

	describe('createUserThunk', () => {
		it('Должен вернуть юзера', () => {
			expect(
				userReducer(undefined, {
					type: createUserThunk.fulfilled.type,
					payload: userMock,
				})
			).toEqual({
				...initialState,
				user: userMock.user,
			});
		});

		it('Должен вернуть null', () => {
			expect(
				userReducer(undefined, {
					type: createUserThunk.rejected.type,
				})
			).toEqual({
				...initialState,
				user: null,
			});
		});

		it('Должен вернуть пустой список во время загрузки', () => {
			expect(
				userReducer(undefined, {
					type: createUserThunk.pending.type,
				})
			).toEqual({
				...initialState,
				user: null,
			});
		});
	});

	describe('logoutUserThunk', () => {
		it('Должен вернуть null', () => {
			expect(
				userReducer(undefined, {
					type: logoutUserThunk.fulfilled.type,
				})
			).toEqual({
				...initialState,
				user: null,
			});
		});
	});

	describe('getUserThunk', () => {
		it('Должен вернуть юзера', () => {
			expect(
				userReducer(undefined, {
					type: getUserThunk.fulfilled.type,
					payload: userMock,
				})
			).toEqual({
				...initialState,
				user: userMock.user,
			});
		});
		it('Должен вернуть null', () => {
			expect(
				userReducer(undefined, {
					type: getUserThunk.rejected.type,
				})
			).toEqual({
				...initialState,
				user: null,
			});
		});
	});
});
