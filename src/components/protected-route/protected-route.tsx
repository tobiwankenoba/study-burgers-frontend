import { Navigate, useLocation } from 'react-router-dom';
import { selectUser } from '../../selectors';
import { useSelector } from '../../types/redux';

type TProtectedProps = {
	onlyUnAuth?: boolean;
	component: JSX.Element;
};

const Protected: React.FC<TProtectedProps> = ({
	onlyUnAuth = false,
	component,
}) => {
	const { user } = useSelector(selectUser);
	const location = useLocation();

	if (!onlyUnAuth && !user) {
		// Для авторизованного, но не авторизован
		return <Navigate to='/login' state={{ from: location }} />;
	}

	if (onlyUnAuth && user) {
		// Для неавторизованного, но авторизован
		const { from } = location.state ?? { from: { pathname: '/' } };
		return <Navigate to={from} />;
	}

	// onlyUnAuth && !user для неавторизованного и не авторизован
	// !onlyUnAuth && user для авторизованного и авторизован

	return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth: React.FC<Pick<TProtectedProps, 'component'>> = ({
	component,
}) => <Protected onlyUnAuth component={component} />;
