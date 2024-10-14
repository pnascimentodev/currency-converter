import React from 'react';

const ConversionHistory = ({ history }) => {
  return (
    <div>
      <h3 className="history-title">Histórico de Conversões</h3>
      {history.length === 0 ? (
        <p>Nenhum histórico de conversão disponível.</p>
      ) : (
        history.map((entry, index) => (
          <div key={index} className="history-entry">
            <p>{entry.amount} {entry.fromCurrency} = {entry.convertedAmount} {entry.toCurrency}</p>
            <p>Rate: {entry.rate} | Date: {entry.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ConversionHistory;
