import React from 'react';
import { MyButton } from './styles';
import { ComponentProps } from './types';

const Button: React.FC<ComponentProps> = ({ text, ...rest }) => {
  return <MyButton {...rest}>{text}</MyButton>;
};

export default Button;
