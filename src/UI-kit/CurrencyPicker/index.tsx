import React from 'react';
import { CurrencyPickerWrapper, Balance, CurrencyButton, Currency } from './styles';
import { ComponentProps } from './types';
import { ChevronDownIcon } from '@heroicons/react/outline';

const CurrencyPicker: React.FC<ComponentProps> = ({ currency, balance }) => {
  return (
    <CurrencyPickerWrapper>
      <CurrencyButton>
        <Currency> {currency} </Currency>
        <ChevronDownIcon height="20px" />
      </CurrencyButton>
      <Balance>Balance: {balance}</Balance>
    </CurrencyPickerWrapper>
  );
};

export default CurrencyPicker;
