import React from 'react';

const CurrencySelector = ({ selectedCurrency, onCurrencyChange }) => {
  const currencies = ['USD', 'BRL', 'EUR', 'JPY', 'GBP']; // Você pode adicionar mais moedas aqui

  return (
    <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
