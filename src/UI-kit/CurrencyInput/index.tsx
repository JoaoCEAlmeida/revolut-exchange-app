import React from 'react';
import { CurrencyInputWrapper } from './styles';

import CurrencyPicker from '../CurrencyPicker';

import Input from '../Input';

import { ComponentProps } from './types';

const CurrencyInput: React.FC<ComponentProps> = ({ pickerProps, inputProps, ...rest }) => {
  return (
    <CurrencyInputWrapper {...rest}>
      <CurrencyPicker {...pickerProps} />
      <Input {...inputProps} />
    </CurrencyInputWrapper>
  );
};

export default CurrencyInput;
