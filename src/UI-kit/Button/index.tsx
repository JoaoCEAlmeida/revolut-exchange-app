import React from 'react';
import { MyButton } from './styles';
import { ComponentProps } from './types';

const Button: React.FC<ComponentProps> = ({
  text,
  onClick,
  type,
  disabled,
  className,
  ...rest
}) => {
  return (
    <MyButton onClick={onClick} type={type} disabled={disabled} className={className} {...rest}>
      {text}
    </MyButton>
  );
};

export default Button;
