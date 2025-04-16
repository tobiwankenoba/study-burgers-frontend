import { useRef } from 'react';
import type { Identifier, XYCoord } from 'dnd-core';
import style from './styles.module.scss';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { EDrugTypeIngredients } from '../../../../types/ingredients';

type TBurgerScrollItemProps = {
	index: number;
	id: number;
	title: string;
	image: string;
	price: number;
	moveCard: (dragIndex: number, hoverIndex: number) => void;
	onRemove: (id: number) => void;
};

interface DragItem {
	index: number;
	id: string;
	type: string;
}

export const BurgerScrollItem: React.FC<TBurgerScrollItemProps> = ({
	id,
	index,
	title,
	image,
	price,
	moveCard,
	onRemove,
}) => {
	const itemRef = useRef<HTMLDivElement>(null);
	const [{}, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
		accept: EDrugTypeIngredients.LocalIngredient,
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item: DragItem, monitor) {
			if (!itemRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			const hoverBoundingRect = itemRef.current?.getBoundingClientRect();

			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			// Determine mouse position
			const clientOffset = monitor.getClientOffset();

			// Get pixels to the top
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%

			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}

			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);

			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: EDrugTypeIngredients.LocalIngredient,
		item: () => {
			return { id, index };
		},
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const opacity = isDragging ? 0 : 1;
	drag(drop(itemRef));

	return (
		<div ref={itemRef} className={style.container} style={{ opacity }}>
			<div className={style.dragNDrop} />
			<ConstructorElement
				handleClose={() => onRemove(id)}
				text={title}
				price={price}
				thumbnail={image}
			/>
		</div>
	);
};
