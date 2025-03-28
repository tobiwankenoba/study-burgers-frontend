import { createReduxStore } from '@utils/redux';
import { TIngridientsState } from '../ingredients';
import { TConstructorState } from '../constructor';
import { TOrderStatus } from '../order';

export interface IPreloadedState {
	ingridientsState: TIngridientsState;
	constructorState: TConstructorState;
	orderStatus: TOrderStatus;
}

export type TReduxStore = ReturnType<typeof createReduxStore>;

export type TApplicationState = ReturnType<TReduxStore['getState']>;

export type TDispatch = TReduxStore['dispatch'];

export interface IThunkApi {
	state: TApplicationState;
	dispatch: TDispatch;
}
