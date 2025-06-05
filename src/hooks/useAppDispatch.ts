import { useDispatch } from 'react-redux';
import { AppDispatch, TDispatch } from '../types/redux';

export const useAppDispatch: () => TDispatch =
	useDispatch.withTypes<AppDispatch>();
