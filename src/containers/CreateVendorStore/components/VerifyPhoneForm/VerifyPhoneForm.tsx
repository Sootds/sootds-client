// // EXTERNAL IMPORTS
// import React, { Dispatch, FunctionComponent, useCallback, memo, useState } from 'react';
// import {
//   Flex,
//   Heading,
//   Stack,
//   Text,
//   Button,
//   FormControl,
//   FormLabel,
//   Box,
//   Input,
//   InputGroup,
//   InputLeftAddon,
//   FormErrorMessage,
//   InputRightElement
// } from '@chakra-ui/react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { joiResolver } from '@hookform/resolvers/joi';

// // LOCAL IMPORTS
// import { VerifyPhoneFormType } from '../../types';
// import { VerifyPhoneFormSchema } from '../../schemas';
// import ProgressBar from '../ProgressBar';

// // Types
// type PropsType = {
//   setStep: Dispatch<number>;
// };

// // Component
// const VerifyPhoneForm: FunctionComponent<PropsType> = (props: PropsType) => {
//   const [isSent, setIsSent] = useState(false);
//   const { register, formState, handleSubmit } = useForm<VerifyPhoneFormType>({
//     resolver: joiResolver(VerifyPhoneFormSchema)
//   });


//   const onVerifyPhoneFormSubmit = useCallback<SubmitHandler<VerifyPhoneFormType>>(
//     async (data): Promise<void> => {
//       // const response = await fetch(
//       //   `${process.env.NEXT_PUBLIC_SERVER_API_ROUTE}/auth/verify-phone`,
//       //   {
//       //     method: 'POST',
//       //     headers: {
//       //       Accept: 'application/json',
//       //       'Content-Type': 'application/json'
//       //     },
//       //     body: JSON.stringify({
//       //       phone_number: data.phone_number,
//       //       confirmation_code: data.confirmation_code
//       //     })
//       //   }
//       // );

//       if (true) {
//         props.setStep(VENDOR_STEPS.STORE_FORM);
//       } else {
//         console.log('ERROR: failed.');
//       }
//     },
//     []
//   );

//   const handleSend = () => {
//     if ( formState.errors.phone_number ) {
//       setIsSent(true)
//     }
//   }

//   return (
//     <Stack
//       as='form'
//       onSubmit={handleSubmit(onVerifyPhoneFormSubmit)}
//       width='100%'
//       alignItems='center'
//       spacing='4'
//     >
//       <ProgressBar step={VENDOR_STEPS.VERIFY_PHONE_FORM} />
//       <Flex width='100%' height='fit-content' direction='column' alignItems='center'>
//         <Heading textAlign='center'>Verification</Heading>
//         <Text textAlign='center'>Verify your email address and phone number.</Text>
//       </Flex>
//       <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
//         <FormControl
//           isInvalid={formState.errors.phone_number?.message && formState.touchedFields.phone_number}
//         >
//           <FormLabel>Phone Number</FormLabel>
//           <InputGroup>
//             <InputLeftAddon children='+1' />
//             <Input
//               id='phone_number'
//               type='tel'
//               placeholder='phone number'
//               {...register('phone_number')}
//             />
//               <Button type='submit' width='6rem' bg='gray.600' color='white' ml={2} onClick={handleSend}>
//                 {isSent ? 'Resend' : 'Send'}
//               </Button>
//           </InputGroup>
//           <FormErrorMessage>{formState.errors.phone_number?.message}</FormErrorMessage>
//         </FormControl>
//       </Box>
//       <Box width={{ base: '80%', sm: '75%', md: '70%' }}>
//         <FormControl
//           isInvalid={
//             formState.errors.confirmation_code?.message && formState.touchedFields.confirmation_code
//           }
//         >
//           <Input
//             id='confirmation_code'
//             type='text'
//             placeholder='Verification Code'
//             {...register('confirmation_code')}
//           />
//           <FormErrorMessage>{formState.errors.confirmation_code?.message}</FormErrorMessage>
//         </FormControl>
//       </Box>
//         <Button
//           type='submit'
//           backgroundColor='black'
//           color='white'
//           width={{ base: '80%', sm: '75%', md: '70%' }}
//         >
//           Next
//         </Button>
//     </Stack>
//   );
// };

// // Display Name
// VerifyPhoneForm.displayName = VerifyPhoneForm.name;

// export default memo(VerifyPhoneForm);
