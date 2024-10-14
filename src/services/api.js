import axios from 'axios';
import { API_URL, API_KEY } from '../config';

export const getExchangeRate = async (fromCurrency, toCurrency) => {
  const apiKey = '2aa6c966684eb21bc060065b'; // Substitua pela sua chave da API
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      return data; // Retorne os dados da API
  } catch (error) {
      console.error("Error fetching exchange rate:", error);
      return null; // Retorna null em caso de erro
  }
};