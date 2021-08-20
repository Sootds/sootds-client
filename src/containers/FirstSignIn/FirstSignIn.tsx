// EXTERNAL IMPORTS
import React, { FunctionComponent, useCallback, memo } from 'react';
import { useRouter } from 'next/router';
import { Flex, Fade, Stack, Heading, Text, Button } from '@chakra-ui/react';

// SHARED IMPORTS
import { navbarHeight } from '../../shared/constants';

// Component
const FirstSignIn: FunctionComponent = () => {
  const router = useRouter();

  const goToMarketplacePage = useCallback<() => void>((): void => {
    router.push('/marketplace');
  }, []);

  const goToBeAVendorPage = useCallback<() => void>((): void => {
    router.push('/be-a-vendor');
  }, []);

  return (
    <Flex
      height='fit-content'
      minHeight={`calc(100vh - ${navbarHeight})`}
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        as='section'
        width={{ base: '100%', sm: '90%', md: 'lg', lg: 'xl' }}
        height='fit-content'
        paddingY='12'
        direction='column'
        boxShadow={{ base: 'none', md: 'md' }}
        transition='height 1s ease-in'
      >
        <Fade in={true}>
          <Stack width='100%' alignItems='center' spacing='4'>
            <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
              <Heading textAlign='center'>Welcome to Sootds!</Heading>
              <Text textAlign='center'>What do you want to do?</Text>
            </Flex>
            <Button
              onClick={goToMarketplacePage}
              type='button'
              width={{ base: '80%', sm: '75%', md: '70%' }}
              backgroundColor='black'
              color='white'
            >
              Shop Clothes
            </Button>
            <Button
              onClick={goToBeAVendorPage}
              type='button'
              width={{ base: '80%', sm: '75%', md: '70%' }}
              backgroundColor='black'
              color='white'
            >
              Be A Vendor
            </Button>
          </Stack>
        </Fade>
      </Flex>
    </Flex>
  );
};

// Display Name
FirstSignIn.displayName = FirstSignIn.name;

export default memo(FirstSignIn);
