import React, { FunctionComponent, memo } from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => (
  <>
    <GlobalStyle />
    <props.Component {...props.pageProps} />
  </>
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
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`;

// Display Name
App.displayName = App.name;

export default memo(App);
