import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { Login } from '../../pages/login/login';
import { Room } from '../../pages/room/room';
import { Header } from '../header/header';
import { NotFound } from '../../pages/not-found/not-found';
import { City, OffersType } from '../../types/types';


type AppTypes = {
  offers: OffersType[];
  city: City;
}


function App(props: AppTypes): JSX.Element {
  const {offers, city} = props;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index path='/'
          element={
            <MainPage
              offers={offers}
              city={city}
            />
          }
        />
        <Route path='/login' element={<Login />} />
        <Route
          path='/offer/:id'
          element={
            <Room />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
