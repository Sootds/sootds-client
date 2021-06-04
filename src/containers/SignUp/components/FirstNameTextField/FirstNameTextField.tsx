import React, { FunctionComponent, memo } from 'react';
import { TextField } from '@fluentui/react';
import { useController, Control } from 'react-hook-form';

// Types
type Props = {
  control: Control;
};

// Component
const FirstNameFieldText: FunctionComponent<Props> = (props: Props) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error }
  } = useController({
    control: props.control,
    name: 'firstName',
    rules: {
      required: 'First name is required.',
      maxLength: { value: 12, message: "First name can't be longer than 12 characters." }
    }
  });

  return (
    <TextField
      {...inputProps}
      componentRef={ref}
      label='First Name'
      defaultValue=''
      errorMessage={error && error.message}
    />
  );
};

export default memo(FirstNameFieldText);
