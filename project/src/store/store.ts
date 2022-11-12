import { configureStore } from '@reduxjs/toolkit';
import { changeLocation } from './reducers/reducer';

const store = configureStore({
  reducer: changeLocation
});

export {store};
