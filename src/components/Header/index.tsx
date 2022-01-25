import React, { useEffect } from 'react';
import { HeaderWrapper, Text, SubText } from './styles';
import {
  selectCurrencyFrom,
  selectCurrencyTo,
  selectTransactionType
} from '../../features/currencySlice';
import useCurrencyRates from '../../hooks/useCurrencyRates';
import { useAppSelector } from '../../app/hooks';

const Header: React.FC = () => {
  const currencyFrom = useAppSelector(selectCurrencyFrom);
  const currencyTo = useAppSelector(selectCurrencyTo);
  const transactionType = useAppSelector(selectTransactionType);

  // Refresh the rate every 10s
  const queryOptions = { refetchInterval: 10000 };

  // fetch currency rates
  const { currencyRate, refetch } = useCurrencyRates(
    'getCurrenciesRates',
    currencyTo,
    currencyFrom,
    queryOptions
  );

  // re-fetch currency rates
  useEffect(() => {
    refetch();
  }, [currencyFrom, currencyTo, refetch]);

  return (
    <HeaderWrapper>
      <Text>
        {transactionType} {currencyFrom}
      </Text>
      <SubText>
        1 {currencyFrom} = {currencyRate} {currencyTo}
      </SubText>
    </HeaderWrapper>
  );
};

export default Header;
