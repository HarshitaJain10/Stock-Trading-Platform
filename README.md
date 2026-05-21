# Stock-Trading-Platform

A full-stack stock trading dashboard inspired by Zerodha, integrated with Machine Learning-based stock prediction using Random Forest and real-time stock market data from Yahoo Finance.

---

## 🚀 Features

* User-friendly stock trading dashboard
* Real-time stock market data visualization
* AI-based BUY/SELL prediction system
* Portfolio and holdings management
* Interactive charts and analytics
* Machine Learning integration using Random Forest
* MERN Stack architecture
* Responsive UI design
* REST API integration
* Real-time financial data using Yahoo Finance API

---

## 🧠 AI Prediction System

The project integrates a Machine Learning model using the Random Forest algorithm to generate stock recommendations.

### Prediction Workflow

1. Fetch historical stock data from Yahoo Finance
2. Perform feature engineering
3. Train Random Forest model
4. Predict stock movement
5. Generate BUY/SELL recommendation

### Features Used

* Daily Returns
* Moving Average (MA5)
* Moving Average (MA10)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Machine Learning

* Python
* Scikit-learn
* Pandas
* NumPy
* yFinance

---


## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 4️⃣ Install Dashboard Dependencies

```bash
cd dashboard
npm install
```

---

### 5️⃣ Install Python Dependencies

```bash
pip install yfinance pandas scikit-learn numpy
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd backend
node index.js
```

---

### Start Frontend

```bash
cd frontend
npm start
```

---

### Start Dashboard

```bash
cd dashboard
npm start
```

---

## 🌐 API Endpoint

### AI Prediction API

```bash
GET /ai/predict/:symbol
```

### Example

```bash
http://localhost:3002/ai/predict/RELIANCE
```

---

## 📊 Machine Learning Model

The project uses:

* Random Forest Classifier
* Supervised Learning
* Historical Stock Price Analysis
* Feature Engineering Techniques

---

## 🔥 Future Enhancements

* LSTM-based Time Series Prediction
* Sentiment Analysis using News APIs
* Live Trading Integration
* Advanced Portfolio Analytics
* Authentication & Authorization
* Cloud Deployment
* Real-time Notifications

---




## 👩‍💻 Author

**Harshita Jain**

---


