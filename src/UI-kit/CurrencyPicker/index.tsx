import React from 'react';
import { CurrencyPickerWrapper, Balance, CurrencyButton, Currency } from './styles';
import { ComponentProps } from './types';
import { ChevronDownIcon } from '@heroicons/react/outline';

const CurrencyPicker: React.FC<ComponentProps> = ({ currency, balance, onClick }) => {
  return (
    <CurrencyPickerWrapper>
      <CurrencyButton onClick={onClick}>
        <Currency data-testid="test-currency">{currency}</Currency>
        <ChevronDownIcon height="20px" />
      </CurrencyButton>
      <Balance data-testid="test-balance">Balance: {balance}</Balance>
    </CurrencyPickerWrapper>
  );
};

export default CurrencyPicker;
