import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthStatus.NoAuth
      ? children
      : <Navigate to={'/'} />
  );
}

export {PrivateRoute};
