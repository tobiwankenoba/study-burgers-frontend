import { TApplicationState, TDispatch } from './redux';

export type TThunk = (dispatch: TDispatch, getState: () => TApplicationState) => void;
