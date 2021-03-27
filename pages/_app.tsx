import { FC } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { useStore } from '../store';
import axios from 'axios';

interface Props {
  Component: any;
  pageProps: any;
}

const App: FC<Props> = ({ Component, pageProps }) => {
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.withCredentials = true;
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
