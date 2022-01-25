import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface CurrencyState {
  transactionType: string;
  currencyFrom: string;
  currencyTo: string;
  accounts: { currency: string; balance: number }[];
}

const initialState: CurrencyState = {
  transactionType: 'Sell',
  currencyFrom: 'EUR',
  currencyTo: 'USD',
  accounts: [
    { currency: 'EUR', balance: 1000 },
    { currency: 'USD', balance: 500 },
    { currency: 'GBP', balance: 2000 }
  ]
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    decrementBalance: (
      state,
      action: PayloadAction<{ currency: string; amount: number | null }>
    ) => {
      const account = state.accounts.find(
        (account) => account.currency === action.payload.currency
      );
      if (account && action.payload.amount) {
        account.balance -= action.payload.amount;
        account.balance = Number(account.balance.toFixed(2));
      }
    },
    incrementBalance: (
      state,
      action: PayloadAction<{ currency: string; amount: number | null }>
    ) => {
      const account = state.accounts.find(
        (account) => account.currency === action.payload.currency
      );

      if (account && action.payload.amount) {
        account.balance += action.payload.amount;
        account.balance = Number(account.balance.toFixed(2));
      }
    },
    setTransactionType: (state, action: PayloadAction<string>) => {
      state.transactionType = action.payload;
    },
    setCurrencyFrom: (state, action: PayloadAction<string>) => {
      state.currencyFrom = action.payload;
    },
    setCurrencyTo: (state, action: PayloadAction<string>) => {
      state.currencyTo = action.payload;
    }
  }
});

export const {
  decrementBalance,
  incrementBalance,
  setCurrencyFrom,
  setCurrencyTo,
  setTransactionType
} = currencySlice.actions;

export const selectTransactionType = (state: RootState) => state.currency.transactionType;

export const selectCurrencyFrom = (state: RootState) => state.currency.currencyFrom;

export const selectCurrencyTo = (state: RootState) => state.currency.currencyTo;

export const selectAccounts = (state: RootState) => state.currency.accounts;

export default currencySlice.reducer;
