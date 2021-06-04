import React, { FunctionComponent, memo } from 'react';
import { TextField } from '@fluentui/react';
import { useController, Control } from 'react-hook-form';

// Types
type Props = {
  control: Control;
};

// Component
const UsernameTextField: FunctionComponent<Props> = (props: Props) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error }
  } = useController({
    control: props.control,
    name: 'username',
    rules: {
      required: 'Username is required.',
      maxLength: { value: 12, message: "Username can't be longer than 12 characters." }
    }
  });

  return (
    <TextField
      {...inputProps}
      componentRef={ref}
      label='Username'
      defaultValue=''
      errorMessage={error && error.message}
    />
  );
};

export default memo(UsernameTextField);
