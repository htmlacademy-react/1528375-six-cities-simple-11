import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/main-page';
import { LoginPage } from '../login-page/login-page';
import { Property } from '../property/property';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<MainPage placesCount={312}/>} />
        <Route path='login' element={<LoginPage />} />
        <Route path='offer/:id' element={<Property />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
