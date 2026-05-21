import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3002"
    : "https://stock-backend-eqlo.onrender.com";

const AIAdvisor = ({ symbol }) => {
  
  const [aiAdvice, setAiAdvice] = useState({});

  const getAIAdvice = async (stockSymbol) => {
    try {
      const res = await axios.get(`${BASE_URL}/ai/predict/${stockSymbol}`);
      console.log("AI response:", res.data);

      if (res.data && res.data.advice) {
        setAiAdvice((prev) => ({
          ...prev,
          [stockSymbol]: res.data.advice,
        }));
      }
    } catch (err) {
      console.error("AI error:", err);
    }
  };

  return (
    <div className="ai-advisor-container">
      <h3>AI Advisor for {symbol}</h3>
      <button onClick={() => getAIAdvice(symbol)}>Get AI Advice</button>
      {aiAdvice[symbol] && <p>{aiAdvice[symbol]}</p>}
    </div>
  );
};


export default AIAdvisor;