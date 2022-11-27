import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { Room } from '../../pages/room/room';
import { NotFound } from '../../pages/not-found/not-found';
import { useAppSelector } from '../../hooks/useSelector';
import { Header } from '../header/header';
import { PrivateRoute } from '../private-route/private-route';
import { Login } from '../../pages/login/login';
import { ScrollToTop } from '../../scroll-to-top';
import { getOffers } from '../../store/offers-data/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';


function App(): JSX.Element {

  const offers = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    <BrowserRouter>
      <Header authorizationStatus={authorizationStatus} />
      <ScrollToTop />
      <Routes>
        <Route
          index path='/'
          element={
            <MainPage
              offers={offers}
            />
          }
        />
        <Route
          path='/offer/:id'
          element={
            <Room authorizationStatus={authorizationStatus}/>
          }
        />
        <Route
          path='/login'
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Login />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
