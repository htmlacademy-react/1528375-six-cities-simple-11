import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { Login } from '../../pages/login/login';
import { Room } from '../../pages/room/room';
import { Header } from '../header/header';
import { NotFound } from '../../pages/not-found/not-found';
import { useAppSelector } from '../../hooks/useSelector';


function App(): JSX.Element {

  const offers = useAppSelector((state) => state.offers);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index path='/'
          element={
            <MainPage
              offers={offers}
              // city={cities}
            />
          }
        />
        <Route path='/login' element={<Login />} />
        <Route
          path='/offer/:id'
          element={
            <Room offers={offers}/>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
