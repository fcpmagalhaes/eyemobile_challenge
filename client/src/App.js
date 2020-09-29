/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider as ReduxProvider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import Routes from './routes';
import store from './store';
import Layout from './components/Layout';

function App() {
  return (
    <CookiesProvider>
      <ReduxProvider store={store}>
        <>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Lato"
            />
          </Helmet>
          <Layout>
            <Routes />
          </Layout>
        </>
      </ReduxProvider>
    </CookiesProvider>
  );
}

export default App;
