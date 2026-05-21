import sys
import yfinance as yf
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

symbol = sys.argv[1] + ".NS"

try:
    data = yf.download(symbol, period="6mo", auto_adjust=True)

    if data.empty:
        print("HOLD")
        sys.exit()

    # Features
    data["Return"] = data["Close"].pct_change()
    data["MA5"] = data["Close"].rolling(window=5).mean()
    data["MA10"] = data["Close"].rolling(window=10).mean()

    data.dropna(inplace=True)

    # Target
    data["Target"] = (data["Close"].shift(-1) > data["Close"]).astype(int)

    data.dropna(inplace=True)

    X = data[["Return", "MA5", "MA10"]]
    y = data["Target"]

    # Model
    model = RandomForestClassifier(
        n_estimators=200,
        random_state=42
    )

    model.fit(X, y)

    # Latest prediction
    latest = X.iloc[-1:].values
    prediction = model.predict(latest)[0]

    if prediction == 1:
        print("BUY")
    else:
        print("SELL")

except Exception as e:
    print("HOLD")