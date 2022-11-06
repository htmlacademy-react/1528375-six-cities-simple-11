import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { CITY } from './mocks/city';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  placesCount: 312,
} as const;

root.render(
  <React.StrictMode>
    <App
      placesCount={Settings.placesCount}
      offers = {offers}
      city = {CITY}
    />
  </React.StrictMode>,
);
