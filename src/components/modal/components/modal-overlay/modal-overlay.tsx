/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import style from './styles.module.scss';
import { useCallback } from 'react';

interface IModalOverlayProps {
	children: React.ReactNode;
	onClose(): void;
	outside?: boolean;
	zIndex?: number;
	open: boolean;
}

export function ModalOverlay({
	children,
	zIndex,
	outside,
	onClose,
	open,
}: IModalOverlayProps): JSX.Element {
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (outside && e.currentTarget === e.target) {
				onClose();
			}
		},
		[onClose, outside]
	);

	return (
		<div
			className={open ? style.open : undefined}
			style={{ zIndex }}
			onClick={onClick}>
			{children}
		</div>
	);
}
