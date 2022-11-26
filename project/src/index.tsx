import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchAuthStatusAction, fetchOffersAction } from './store/actions/api-actions';


store.dispatch(fetchOffersAction());
store.dispatch(fetchAuthStatusAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
);
