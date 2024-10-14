import React, { useState, useEffect } from 'react';
import CurrencySelector from './CurrencySelector';
import ConversionHistory from './ConversionHistory';
import { getExchangeRate } from '../services/api';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('BRL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [conversionResult, setConversionResult] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      fetchConversionRate();
    }
  }, [amount, fromCurrency, toCurrency]);

  const fetchConversionRate = async () => {
    const result = await getExchangeRate(fromCurrency, toCurrency);
    if (result && result.rates) {
      const rate = result.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      setConversionResult(convertedAmount);

      const newEntry = {
        fromCurrency,
        toCurrency,
        amount,
        convertedAmount,
        rate,
        date: new Date().toLocaleString(),
      };
      setHistory([newEntry, ...history]);
      localStorage.setItem('conversionHistory', JSON.stringify([newEntry, ...history]));
    }
  };

  return (
    <div className="app-container">
      <h1>Currency Converter</h1>
      
      <div className="converter-section">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
        />
        <CurrencySelector
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />
        <span>to</span>
        <CurrencySelector
          selectedCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
        />
      </div>

      {conversionResult && (
        <div className="result-section">
          <h2>{amount} {fromCurrency} = {conversionResult} {toCurrency}</h2>
        </div>
      )}

      <ConversionHistory history={history} />
    </div>
  );
};

export default CurrencyConverter;
