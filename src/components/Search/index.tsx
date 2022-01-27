import React, { useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { useAppDispatch } from '../../app/hooks';
import { setCurrencyFrom, setCurrencyTo } from '../../features/currencySlice';
import {
  SearchWrapper,
  StyledInput,
  InputWrapper,
  StyledButton,
  StyledButtonCurrency,
  NotFound
} from './styles';

const currencies = [
  { currency: 'EUR', id: 1 },
  { currency: 'USD', id: 2 },
  { currency: 'GBP', id: 3 }
];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const queryString = useLocation().search;
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const currencyType = new URLSearchParams(queryString).get('currencyType');

  // If API offered a search option we should use it
  // For now I'll use the 3 default currencies hard coded in the project.
  const filteredCurrency = useMemo(
    () =>
      currencies.filter((account) => {
        if (searchTerm == '') return account;
        else if (account.currency.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
          return account;
      }),
    [searchTerm]
  );

  const goBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const selectCurrency = useCallback(
    (currency: string) => () => {
      if (currencyType === 'currencyFrom') {
        dispatch(setCurrencyFrom(currency));
        navigate('/');
      } else if (currencyType === 'currencyTo') {
        dispatch(setCurrencyTo(currency));
        navigate('/');
      } else return;
    },
    [currencyType, dispatch, navigate]
  );
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }, []);

  return (
    <SearchWrapper>
      <InputWrapper>
        <StyledInput type="text" placeholder="Search..." value={searchTerm} onChange={onChange} />
        <StyledButton text="Cancel" onClick={goBack} />
      </InputWrapper>
      {filteredCurrency.length ? (
        filteredCurrency.map((account) => {
          return (
            <StyledButtonCurrency
              key={nanoid()}
              text={account.currency}
              onClick={selectCurrency(account.currency)}
              data-testid="button"
            />
          );
        })
      ) : (
        <NotFound data-testid="not-found">The searched currency is not available.</NotFound>
      )}
    </SearchWrapper>
  );
};

export default Search;
