import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

import './styles.css';
import store from '../store/store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
