import React, { FunctionComponent, useCallback, memo } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from '@fluentui/react';
import {
  FirstNameTextField,
  LastNameTextField,
  UsernameTextField,
  EmailTextField,
  PasswordTextField
} from './components';
import { Layout } from '../../shared/components';

// Component
const SignUp: FunctionComponent = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = useCallback((data): void => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <StyledSignUp>
        <Card>
          <H1>Sootds</H1>
          <FirstNameTextField control={control} />
          <LastNameTextField control={control} />
          <UsernameTextField control={control} />
          <EmailTextField control={control} />
          <PasswordTextField control={control} />
          <PrimaryButton
            style={{ marginTop: '20px' }}
            text='Sign Up'
            type='submit'
            onClick={handleSubmit(onSubmit)}
          />
        </Card>
      </StyledSignUp>
    </Layout>
  );
};

// Styles
const StyledSignUp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 30%;
  height: fit-content;
  padding: 30px;
  display: flex;
  align-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const H1 = styled.h1`
  font-size: 64px;
  text-align: center;
`;

// Display Names
SignUp.displayName = SignUp.name;
StyledSignUp.displayName = StyledSignUp.name;

export default memo(SignUp);
