// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

// LOCAL IMPORTS
import { AuthContextProvider } from '../shared/context';
import { Layout } from '../shared/components';

// Extend Chakra Theme
const theme = extendTheme({
  components: {
    Steps
  }
});

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => (
  <Fragment>
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
      </ChakraProvider>
    </AuthContextProvider>
  </Fragment>
);

// Display Name
App.displayName = App.name;

export default memo(App);
