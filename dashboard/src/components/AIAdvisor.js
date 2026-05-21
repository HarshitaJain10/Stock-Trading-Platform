const getAIAdvice = async (symbol) => {
  try {
    const res = await axios.get(
      `http://localhost:3002/ai/predict/${symbol}`
    );

    console.log("AI response:", res.data);

    if (res.data && res.data.advice) {
      setAiAdvice((prev) => ({
        ...prev,
        [symbol]: res.data.advice,
      }));
    }
  } catch (err) {
    console.error("AI error:", err);
  }
};