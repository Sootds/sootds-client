import React, { FunctionComponent, memo } from 'react';
import { TextField } from '@fluentui/react';
import { useController, Control } from 'react-hook-form';

// Types
type Props = {
  control: Control;
};

// Component
const EmailTextField: FunctionComponent<Props> = (props: Props) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error }
  } = useController({
    control: props.control,
    name: 'email',
    rules: {
      required: 'Email is required.',
    }
  });

  return (
    <TextField
      {...inputProps}
      componentRef={ref}
      label='Email'
      type='email'
      defaultValue=''
      errorMessage={error && error.message}
    />
  );
};

export default memo(EmailTextField);
