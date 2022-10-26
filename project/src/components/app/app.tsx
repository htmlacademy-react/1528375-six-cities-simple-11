import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { Login } from '../../pages/login/login';
import { Offer } from '../../pages/offer/offer';
import { Header } from '../header/header';
import { NotFound } from '../../pages/not-found/not-found';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<MainPage placesCount={312}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/offer/:id' element={<Offer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
