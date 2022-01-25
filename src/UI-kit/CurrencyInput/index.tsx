import React from 'react';
import { CurrencyInputWrapper } from './styles';

import CurrencyPicker from '../CurrencyPicker';

import Input from '../Input';

import { ComponentProps } from './types';

const CurrencyInput: React.FC<ComponentProps> = ({ pickerProps, inputProps }) => {
  return (
    <CurrencyInputWrapper>
      <CurrencyPicker {...pickerProps} />
      <Input {...inputProps} />
    </CurrencyInputWrapper>
  );
};

export default CurrencyInput;
