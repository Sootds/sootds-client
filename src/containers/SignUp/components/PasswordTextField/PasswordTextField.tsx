import React, { FunctionComponent, memo } from 'react';
import { TextField } from '@fluentui/react';
import { useController, Control } from 'react-hook-form';

// Types
type Props = {
  control: Control;
};

// Component
const PasswordTextField: FunctionComponent<Props> = (props: Props) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error }
  } = useController({
    control: props.control,
    name: 'password',
    rules: {
      required: 'Password is required.',
    }
  });

  return (
    <TextField
      {...inputProps}
      componentRef={ref}
      label='Password'
      type='password'
      defaultValue=''
      errorMessage={error && error.message}
    />
  );
};

export default memo(PasswordTextField);
