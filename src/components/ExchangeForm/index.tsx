import React, { SyntheticEvent, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  selectCurrencyFrom,
  selectCurrencyTo,
  selectAccounts,
  selectTransactionType,
  incrementBalance,
  decrementBalance,
  setTransactionType
} from '../../features/currencySlice';
import { ExchangeFormWrapper, CurrencyInputWrapper, StyledButton } from './styles';
import CurrencyInput from '../../UI-kit/CurrencyInput';

import SwitchButton from '../../UI-kit/SwitchButton';
import useCurrencyRates from '../../hooks/useCurrencyRates';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const buttonText = (transactionType: string, currencyFrom: string, currencyTo: string) =>
  transactionType === 'Sell'
    ? `${transactionType} ${currencyFrom} for ${currencyTo}`
    : `${transactionType} ${currencyFrom} with ${currencyTo}`;

const ExchangeForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currencyFrom = useAppSelector(selectCurrencyFrom);
  const currencyTo = useAppSelector(selectCurrencyTo);
  const accounts = useAppSelector(selectAccounts);
  const transactionType = useAppSelector(selectTransactionType);

  const accountFrom = accounts.filter((account) => account.currency === currencyFrom)[0];
  const accountTo = accounts.filter((account) => account.currency === currencyTo)[0];

  const { currencyRate } = useCurrencyRates('getCurrenciesRates', currencyTo, currencyFrom);

  // Pattern to validated to if the user type only numbers with two digits after the dot.
  // eslint-disable-next-line no-useless-escape
  const inputPattern = /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/;

  // Inputs states
  const [currencyFromInput, setCurrencyFromInput] = useState<string | null>('');
  const [currencyFromInputError, setCurrencyFromInputError] = useState('');
  const [currencyToInput, setCurrencyToInput] = useState<string | null>('');
  const [currencyToInputError, setCurrencyToInputError] = useState('');

  const resetInput = useCallback(() => {
    setCurrencyFromInputError('');
    setCurrencyToInputError('');
    setCurrencyToInput('');
    setCurrencyFromInput('');
  }, []);

  // disable exhange button
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (currencyToInputError || currencyFromInputError) {
      setDisabled(true);
      return;
    }
    if (!currencyToInput || !currencyFromInput) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [currencyToInputError, currencyToInput, currencyFromInput, currencyFromInputError]);

  const exchangeCurrency = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      if (transactionType === 'Sell') {
        dispatch(incrementBalance({ currency: currencyTo, amount: Number(currencyToInput) }));
        dispatch(decrementBalance({ currency: currencyFrom, amount: Number(currencyFromInput) }));
      } else {
        dispatch(incrementBalance({ currency: currencyFrom, amount: Number(currencyFromInput) }));
        dispatch(decrementBalance({ currency: currencyTo, amount: Number(currencyToInput) }));
      }

      resetInput();
    },
    [
      currencyTo,
      currencyToInput,
      currencyFrom,
      currencyFromInput,
      transactionType,
      dispatch,
      resetInput
    ]
  );

  const changeTransactionType = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      transactionType === 'Sell'
        ? dispatch(setTransactionType('Buy'))
        : dispatch(setTransactionType('Sell'));
    },
    [transactionType, dispatch]
  );

  const onClickCurrencyPicker = useCallback(
    (currencyType: string) => (e: SyntheticEvent) => {
      e.preventDefault();

      navigate(`/search?currencyType=${currencyType}`);
    },
    [navigate]
  );

  const onChange = (
    value: string,
    set: React.Dispatch<React.SetStateAction<string>>,
    setValue: React.Dispatch<React.SetStateAction<string | null>>,
    setConvertedValue: React.Dispatch<React.SetStateAction<string | null>>,
    ConvertedValue: string
  ) => {
    // input error logic
    if (!value) {
      resetInput();
      return;
    } else if (!inputPattern.test(value)) set('Only numbers allowed (max 2 decimals)');
    else if (transactionType === 'Sell' && accountFrom.balance < Number(value))
      setCurrencyFromInputError('Amount exceeds balance limit');
    else if (transactionType === 'Buy' && accountTo.balance < Number(value))
      setCurrencyToInputError('Amount exceeds balance limit');
    else if (accountFrom.balance >= Number(value) || accountTo.balance >= Number(value)) {
      setCurrencyFromInputError('');
      setCurrencyToInputError('');
    }

    // update input state value
    setValue(value);
    setConvertedValue(ConvertedValue);
  };

  return (
    <>
      <ExchangeFormWrapper>
        <CurrencyInputWrapper>
          <CurrencyInput
            pickerProps={{
              ...accountFrom,
              onClick: onClickCurrencyPicker('currencyFrom')
            }}
            inputProps={{
              value: currencyFromInput,
              placeholder: 0,
              type: 'text',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                onChange(
                  e.target.value,
                  setCurrencyFromInputError,
                  setCurrencyFromInput,
                  setCurrencyToInput,
                  (Number(e.target.value) * currencyRate).toFixed(2)
                );
              },
              error: currencyFromInputError
            }}
          />
          <SwitchButton transactionType={transactionType} onClick={changeTransactionType} />
          <CurrencyInput
            pickerProps={{
              ...accountTo,
              onClick: onClickCurrencyPicker('currencyTo')
            }}
            inputProps={{
              value: currencyToInput,
              placeholder: '0',
              type: 'text',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault();
                onChange(
                  e.target.value,
                  setCurrencyToInputError,
                  setCurrencyToInput,
                  setCurrencyFromInput,
                  (Number(e.target.value) * (1 / currencyRate)).toFixed(2)
                );
              },
              error: currencyToInputError
            }}
          />
        </CurrencyInputWrapper>
        <StyledButton
          text={buttonText(transactionType, currencyFrom, currencyTo)}
          type="submit"
          onClick={exchangeCurrency}
          disabled={disabled}
        />
      </ExchangeFormWrapper>
    </>
  );
};

export default ExchangeForm;
