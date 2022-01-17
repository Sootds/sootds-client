// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Stack, Input, Button, Wrap, WrapItem } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';
import * as pageRoutes from '../../shared/constants/pageRoutes';

// LOCAL IMPORTS
import { VendorCard } from './components';

// Component
const Vendors: FunctionComponent = () => {
  const router = useRouter();

  const onVendorSignup = useCallback((): void => {
    router.push(pageRoutes.VENDOR_SIGNUP_PAGE);
  }, []);

  return (
    <Flex
      width='100%'
      height={`calc(100vh - ${navbarHeight})`}
      paddingTop={8}
      flexDirection='column'
    >
      <Flex width='100%' height='fit-content' marginBottom={8} justifyContent='space-between'>
        <Heading children='Vendors' />
        <Stack direction='row' spacing={4}>
          <Input placeholder='Search vendors' />
          <Button paddingX={8} colorScheme='gray'>
            Search
          </Button>
          <Button paddingX={8} colorScheme='teal' onClick={onVendorSignup}>
            Be A Vendor
          </Button>
        </Stack>
      </Flex>
      <Wrap spacing={8} justify='center' shouldWrapChildren={true}>
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />

        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />

        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
      </Wrap>
    </Flex>
  );
};

// Display Name
Vendors.displayName = Vendors.name;

export default memo(Vendors);
