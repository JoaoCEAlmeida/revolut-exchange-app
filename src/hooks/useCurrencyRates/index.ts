import { useQuery } from 'react-query';

import { QueryOptions } from './types';
import getCurrenciesRates from '../../api';

const useCurrencyRates = (
  queryKey: string,
  currencyTo: string,
  currencyFrom: string,
  queryOptions?: QueryOptions
) => {
  const { data, isLoading, ...rest } = useQuery(
    queryKey,
    () => getCurrenciesRates(`${currencyFrom},${currencyTo}`),
    queryOptions
  );

  let currencyRate = 1;

  if (queryKey === 'getCurrenciesRates')
    // The API only gives rates with the USD as a base currency
    // since I'm using the free plan
    // So I'll use a formula to get the correct rate using the USD as base
    currencyRate = data && ((1 / data[currencyFrom]) * data[currencyTo]).toFixed(5);

  return {
    ...rest,
    isLoading,
    currencyRate
  };
};

export default useCurrencyRates;
