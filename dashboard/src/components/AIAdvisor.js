const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3002"
    : "https://stock-backend-eqlo.onrender.com";

const getAIAdvice = async (symbol) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/ai/predict/${symbol}`
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

export default AIAdvisor;