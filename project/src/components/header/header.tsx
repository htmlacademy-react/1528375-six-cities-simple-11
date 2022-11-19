import { Link } from 'react-router-dom';
import { AuthStatus } from '../../constants';
import { useAppSelector } from '../../hooks/useSelector';
import { logoutAction } from '../../store/actions/api-actions';
import { store } from '../../store/store';

type HeaderPropsType = {
  authorizationStatus: AuthStatus;
}

function Header(props: HeaderPropsType): JSX.Element {
  const {authorizationStatus} = props;
  const handleLogout = () => store.dispatch(logoutAction());
  const { avatarUrl, name } = useAppSelector((state) => state.userData);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={'/'} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>

          { authorizationStatus === AuthStatus.Auth
            ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${avatarUrl})`}}/>
                    <span className="header__user-name user__name">{name}</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#todo">
                    <span onClick={handleLogout} className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
            :
            <nav className="header__nav">
              <Link className="header__nav-link" to={'/login'}>
                <span className="header__signout">Log In</span>
              </Link>
            </nav>}

        </div>
      </div>
    </header>
  );
}

export {Header};
