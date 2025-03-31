import { RefObject } from 'react';

export const computeBounding = (
	tabsRef: RefObject<HTMLDivElement>,
	secondRef: RefObject<HTMLDivElement>
): number => {
	return Math.abs(
		Number(tabsRef.current?.getBoundingClientRect().y) -
			Number(secondRef.current?.getBoundingClientRect().y)
	);
};
