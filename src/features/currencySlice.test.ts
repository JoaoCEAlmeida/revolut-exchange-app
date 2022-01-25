import currencyReducer, {
  CurrencyState,
  decrementBalance,
  incrementBalance,
  setCurrencyFrom,
  setCurrencyTo,
  setTransactionType
} from './currencySlice';

describe('counter reducer', () => {
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
  it('should handle initial state', () => {
    expect(currencyReducer(undefined, { type: 'unknown' })).toEqual({
      transactionType: 'Sell',
      currencyFrom: 'EUR',
      currencyTo: 'USD',
      accounts: [
        { currency: 'EUR', balance: 1000 },
        { currency: 'USD', balance: 500 },
        { currency: 'GBP', balance: 2000 }
      ]
    });
  });

  it('should handle setCurrencyFrom', () => {
    const actual = currencyReducer(initialState, setCurrencyFrom('GBP'));
    expect(actual.currencyFrom).toEqual('GBP');
  });

  it('should handle setCurrencyTo', () => {
    const actual = currencyReducer(initialState, setCurrencyTo('GBP'));
    expect(actual.currencyTo).toEqual('GBP');
  });

  it('should handle setTransactionType', () => {
    const actual = currencyReducer(initialState, setTransactionType('Buy'));
    expect(actual.transactionType).toEqual('Buy');
  });

  it('should handle increment', () => {
    const currency = 'EUR';
    const amount = 10;

    const getBalance = (accounts: Array<{ currency: string; balance: number }>) => {
      return accounts.filter((account) => account?.currency === currency)[0].balance;
    };

    const expectedBalance = getBalance(initialState.accounts) + amount;

    const actual = currencyReducer(
      initialState,
      incrementBalance({ currency: currency, amount: amount })
    );

    expect(getBalance(actual.accounts)).toEqual(expectedBalance);
  });

  it('should handle decrement', () => {
    const currency = 'USD';
    const amount = 10;
    const getBalance = (accounts: Array<{ currency: string; balance: number }>) => {
      return accounts.filter((account) => account?.currency === currency)[0].balance;
    };
    const expectedBalance = getBalance(initialState.accounts) - amount;
    const actual = currencyReducer(
      initialState,
      decrementBalance({ currency: currency, amount: amount })
    );
    expect(getBalance(actual.accounts)).toEqual(expectedBalance);
  });
});
