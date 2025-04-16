import { createReduxStore } from '@utils/redux';
import { TIngredientsState } from '../ingredients';
import { TConstructorState } from '../constructor';
import { TOrderStatus } from '../order';
import { TUserState } from '../user';

export interface IPreloadedState {
	ingredientsState: TIngredientsState;
	constructorState: TConstructorState;
	orderStatus: TOrderStatus;
	user: TUserState;
}

export type TReduxStore = ReturnType<typeof createReduxStore>;

export type TApplicationState = ReturnType<TReduxStore['getState']>;

export type TDispatch = TReduxStore['dispatch'];

export interface IThunkApi {
	state: TApplicationState;
	dispatch: TDispatch;
}
