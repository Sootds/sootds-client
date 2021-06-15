import React, { FunctionComponent, Fragment, memo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => (
  <Fragment>
    <Head>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap'
        rel='stylesheet'
      />
    </Head>
    <GlobalStyle />
    <props.Component {...props.pageProps} />
  </Fragment>
);

// Styles
const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`;

// Display Name
App.displayName = App.name;

export default memo(App);
