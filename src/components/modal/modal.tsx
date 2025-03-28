import { useEffect } from 'react';
import { ModalOverlay } from './components/modal-overlay';
import style from './styles.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('react-modals');

interface IModalProps {
	open: boolean;
	onClose: VoidFunction;
	content: JSX.Element | null;
	header?: JSX.Element;
}

export const Modal: React.FC<IModalProps> = ({
	open,
	content,
	header,
	onClose,
}) => {
	useEffect(() => {
		const close = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && open) {
				onClose();
			}
		};
		window.addEventListener('keydown', close);
		return () => window.removeEventListener('keydown', close);
	}, [onClose, open]);

	if (!open) {
		return null;
	}

	return createPortal(
		<ModalOverlay onClose={onClose} open={open} outside>
			<div className={style.container}>
				<div className={style.wrapper}>
					<div className={style.header}>
						{header && header}
						<div
							role='button'
							tabIndex={0}
							className={style.close}
							onClick={onClose}
						/>
					</div>
					{content}
				</div>
			</div>
		</ModalOverlay>,
		modalRoot as HTMLElement
	);
};
