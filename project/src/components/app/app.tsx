import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { Login } from '../../pages/login/login';
// import { Room } from '../../pages/room/room';
import { Header } from '../header/header';
import { NotFound } from '../../pages/not-found/not-found';
import { OffersType } from '../../types/types';

type AppTypes = {
  placesCount: number;
  offers: OffersType[];
}


function App({placesCount, offers}: AppTypes): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index path='/'
          element={
            <MainPage
              placesCount={placesCount}
              offers={offers}
            />
          }
        />
        <Route path='/login' element={<Login />} />
        {/* <Route
          path='/offer/:id'
          element={<Room />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
