import React from 'react';

import { ExchangeFormWrapper, CurrencyInputWrapper, StyledButton } from './styles';
import CurrencyInput from '../../UI-kit/CurrencyInput';

import SwitchButton from '../../UI-kit/SwitchButton';

const ExchangeForm: React.FC = () => {
  return (
    <ExchangeFormWrapper>
      <CurrencyInputWrapper>
        <CurrencyInput pickerProps={{ currency: 'EUR', balance: '1000' }} />
        <SwitchButton />
        <CurrencyInput pickerProps={{ currency: 'USD', balance: '500' }} />
      </CurrencyInputWrapper>
      <StyledButton text="Sell EUR for USD" />
    </ExchangeFormWrapper>
  );
};

export default ExchangeForm;
