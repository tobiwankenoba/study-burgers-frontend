import { HomeContent } from '@components/home-content';

interface IHomeContentProps {
	contentModal?: JSX.Element | null;
}

export const HomePage: React.FC<IHomeContentProps> = (props) => {
	return <HomeContent {...props} />;
};
