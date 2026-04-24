# Credit Card Fraud Detection

## Overview

This project focuses on detecting fraudulent credit card transactions using machine learning techniques. Due to extreme class imbalance, special attention is given to recall and ROC-AUC instead of accuracy.

## Dataset

* Source: Kaggle Credit Card Fraud Detection Dataset
* Highly imbalanced dataset (~0.17% fraud cases)

## Key Steps

* Data Cleaning & Preprocessing
* Exploratory Data Analysis (EDA)
* Feature Engineering (Time Buckets, Amount Bands, Log Transform)
* Model Training (Logistic Regression)
* Evaluation using Precision, Recall, F1-score, ROC-AUC

## Results

* ROC-AUC Score: ~0.96
* Fraud Detection Recall: ~57%
* Model effectively distinguishes fraud vs legitimate transactions

## Business Insights

* Fraud is extremely rare → accuracy is misleading
* High recall is critical to reduce financial losses
* Risk scoring helps prioritize high-risk transactions

## Tech Stack

* Python (Pandas, NumPy)
* Matplotlib, Seaborn
* Scikit-learn
* Google Colab

## Author

Sumukhi Pandey
