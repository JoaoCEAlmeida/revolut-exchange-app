import React from 'react';
import { MyInput, InputContainer, ErrorMessage } from './styles';
import { ComponentProps } from './types';

const Input: React.FC<ComponentProps> = ({ error, ...rest }) => {
  return (
    <InputContainer>
      <MyInput {...rest}></MyInput>
      {error && <ErrorMessage> {error} </ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
