import React, { FunctionComponent, Fragment, memo } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../shared/components';

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => (
  <Fragment>
    <ChakraProvider>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </ChakraProvider>
  </Fragment>
);

// Display Name
App.displayName = App.name;

export default memo(App);
