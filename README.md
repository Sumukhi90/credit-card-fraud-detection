# 💳 Credit Card Fraud Detection 

## 📌 Problem Statement

Credit card fraud detection is a critical problem in financial systems due to highly imbalanced data, where fraudulent transactions represent a very small fraction of total transactions. Traditional accuracy metrics fail in such cases, making recall and ROC-AUC more important.

---

## 📊 Dataset

* Source: Kaggle Credit Card Fraud Dataset
* Transactions: ~284,000
* Fraud cases: ~0.17%

---

## ⚙️ Approach

### 🔹 Data Processing

* Checked missing values
* Converted target variable to integer
* Handled class imbalance awareness

### 🔹 Feature Engineering

* Hour-based transaction buckets (Morning, Afternoon, Evening, Night)
* Transaction amount bands (Micro, Low, Medium, High, Very High)
* Log transformation for skewed amount distribution

### 🔹 Model Used

* Logistic Regression
* StandardScaler for normalization

---

## 📈 Results

| Metric         | Value |
| -------------- | ----- |
| ROC-AUC        | ~0.96 |
| Recall (Fraud) | ~57%  |
| Accuracy       | ~99%  |

⚠️ Accuracy is misleading due to imbalance
✅ Recall is prioritized to catch fraud cases

---

## 💡 Key Insights

* Fraud transactions are extremely rare → imbalance problem
* High-value transactions show higher fraud probability
* Night-time transactions show slightly elevated risk
* Model performs well in separating fraud vs legitimate transactions

---

## 🏦 Business Impact

* Enables early fraud detection
* Reduces financial losses
* Helps prioritize high-risk transactions
* Can be integrated into real-time fraud detection systems

---

## 🛠 Tech Stack

* Python (Pandas, NumPy)
* Matplotlib, Seaborn
* Scikit-learn
* Google Colab

---

## 🚀 How to Run

1. Download dataset from Kaggle
2. Place it in your Google Drive
3. Update path in notebook
4. Run all cells

---

## 👩‍💻 Author

Sumukhi Pandey
Aspiring Data Analyst | B.Tech CSE
GitHub: https://github.com/Sumukhi90
