import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUserState } from '../../types/user';
import {
	createUserThunk,
	loginUserThunk,
	logoutUserThunk,
} from '../../thunks/user';
import { getUserThunk } from '../../thunks/user/getUser';

const initialState: TUserState = {
	user: null,
	isAuthChecked: false,
};

const userSlice = createSlice({
	extraReducers(builder) {
		builder
			.addCase(loginUserThunk.pending, (state) => {
				state.user = null;
				state.isAuthChecked = false;
			})
			.addCase(
				loginUserThunk.fulfilled,
				(state, action: PayloadAction<TUserState>) => {
					state.user = action.payload.user;
					state.isAuthChecked = action.payload.isAuthChecked;
				}
			)
			.addCase(loginUserThunk.rejected, (state) => {
				state.user = null;
				state.isAuthChecked = false;
			})
			.addCase(createUserThunk.pending, (state) => {
				state.user = null;
				state.isAuthChecked = false;
			})
			.addCase(
				createUserThunk.fulfilled,
				(state, action: PayloadAction<TUserState>) => {
					state.user = action.payload.user;
					state.isAuthChecked = action.payload.isAuthChecked;
				}
			)
			.addCase(createUserThunk.rejected, (state) => {
				state.user = null;
				state.isAuthChecked = false;
			})
			.addCase(logoutUserThunk.fulfilled, (state) => {
				state.user = null;
				state.isAuthChecked = false;
			})
			.addCase(
				getUserThunk.fulfilled,
				(state, action: PayloadAction<TUserState>) => {
					state.user = action.payload.user;
					state.isAuthChecked = action.payload.isAuthChecked;
				}
			)
			.addCase(getUserThunk.rejected, (state) => {
				state.user = null;
				state.isAuthChecked = false;
			});
	},
	initialState,
	name: 'user',
	reducers: {},
});

export const { reducer: userReducer } = userSlice;
