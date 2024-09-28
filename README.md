# House Price Prediction in Bengaluru

## Project Overview
This project aims to predict house prices in Bengaluru using a **Linear Regression** model. The dataset contains various features affecting house prices, such as location, size, number of bedrooms, bathrooms, and total square footage. The goal is to build a predictive model that can estimate house prices based on these attributes.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Dataset](#dataset)
3. [Installation](#installation)
4. [Model Development](#model-development)
5. [Usage](#usage)
6. [Results](#results)
7. [Conclusion](#conclusion)
8. [Future Work](#future-work)
9. [Contact](#contact)

## Dataset
The dataset is sourced from Kaggle and contains detailed information about housing in Bengaluru. Key features include:

- `Location`: The area where the property is situated.
- `Size`: Number of bedrooms (BHK).
- `Total_sqft`: Total area of the house in square feet.
- `Bath`: Number of bathrooms.
- `Price`: The target variable representing the house price.

## Installation
To set up the project on your local machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Srinivaskoruprolu007/House-Price-Prediction-Model.git
cd House-Price-Prediction-Model
```

### 2. Install Dependencies
Ensure you have Python 3.x installed. Install the required libraries using:

```bash
pip install -r requirements.txt
```

## Model Development
### Data Preprocessing
- **Missing Values**: Rows with critical missing values were either removed or imputed.
- **Outlier Removal**: Outliers that skewed results were identified and removed.
- **Encoding Categorical Features**: Categorical variables like `Location` were transformed using one-hot encoding.
- **Feature Scaling**: Scaling was applied to continuous variables for better model performance.

### Model Training
- The model was developed using **Linear Regression** from the `scikit-learn` library.
- **GridSearchCV** was used to optimize hyperparameters and ensure model generalizability.

## Usage
To run the model and make predictions:

1. **Run the Python Script**:
   Execute the following command:

   ```bash
   python house_price_prediction.py
   ```

2. **Make Predictions**:
   Modify the script to input new house details for price predictions.

## Results
The Linear Regression model achieved the following metrics on the test data:

- **R² Score**: 0.75
- **Mean Absolute Error (MAE)**: 10.32 Lakhs

The model demonstrates a good predictive capability, although further enhancements can be made.

## Conclusion
This project illustrates the application of a Linear Regression model for predicting house prices in Bengaluru. It highlights key data preprocessing steps and model training techniques.

## Future Work
Future enhancements could include:
- **Feature Engineering**: Incorporating additional features such as proximity to amenities or age of the property.
- **Advanced Models**: Exploring models like **Random Forest** or **XGBoost** for improved accuracy.
- **Web Application**: Creating a web interface using **Flask** or **Streamlit** for interactive predictions.

## Contact
For any questions or feedback, please reach out at [srinivasg3112@gmail.com](mailto:srinivasg3112@gmail.com).
