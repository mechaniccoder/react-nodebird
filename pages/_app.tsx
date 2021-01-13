import { FC } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { useStore } from 'store';

interface Props {
  Component: any;
  pageProps: any;
}

const App: FC<Props> = ({ Component, pageProps }) => {
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
