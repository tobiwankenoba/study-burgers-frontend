import { createReduxStore, rootReducer } from '@utils/redux';
import { TIngredientsState } from '../ingredients';
import { TConstructorState } from '../constructor';
import { TOrdersState, TOrderStatus } from '../order';
import { TUserState } from '../user';
import { orderStatusActionTypes } from '../../actions/orders';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useSelector as selectorHook } from 'react-redux';
import { profileOrderStatusActionTypes } from '../../actions/profileOrders';

export interface IPreloadedState {
	ingredientsState: TIngredientsState;
	constructorState: TConstructorState;
	orderStatus: TOrderStatus;
	orders: TOrdersState;
	profileOrders: TOrdersState;
	user: TUserState;
}

export type TReduxStore = ReturnType<typeof createReduxStore>;

export type TApplicationState = ReturnType<TReduxStore['getState']>;

export type TDispatch = TReduxStore['dispatch'];

export type RootState = ReturnType<typeof rootReducer>;

type AppActions = orderStatusActionTypes | profileOrderStatusActionTypes;

export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;

export const useSelector = selectorHook.withTypes<RootState>();

export interface IThunkApi {
	state: TApplicationState;
	dispatch: TDispatch;
}
