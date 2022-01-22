import styled from 'styled-components';
import CurrencyInput from '../../UI-kit/CurrencyInput';
import Button from '../../UI-kit/Button';

import { mobile } from '../../styles/mediaQueries';

export const ExchangeFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  ${mobile(`
    margin-left: 5px;
    margin-right: 5px;
  `)}
`;

export const CurrencyInputWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
  width: 100%;
`;

export const StyledCurrencyInput = styled(CurrencyInput)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledButton = styled(Button)`
  width: 50%;
`;
