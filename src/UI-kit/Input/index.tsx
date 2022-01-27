import React from 'react';
import { MyInput, InputContainer, ErrorMessage } from './styles';
import { ComponentProps } from './types';

const Input: React.FC<ComponentProps> = ({
  type,
  placeholder,
  error,
  onChange,
  className,
  ...rest
}) => {
  return (
    <InputContainer>
      <MyInput
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        {...rest}
      />
      {error && <ErrorMessage data-testid="test-error">{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
