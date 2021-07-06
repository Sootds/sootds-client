import React, { FunctionComponent, Fragment, memo } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Layout } from '../shared/components';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'

const theme = extendTheme({
  components: {
    Steps,
  },
});

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => (
  <Fragment>
    <ChakraProvider theme={theme}>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </ChakraProvider>
  </Fragment>
);

// Display Name
App.displayName = App.name;

export default memo(App);
