import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';
import BaseApp from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <Provider store={store}>
            <BaseApp />
         </Provider>
      </ThemeProvider>
   </React.StrictMode>
);
