
# House Price Prediction in Bengaluru  

## Project Overview  
This project aims to predict house prices in Bengaluru using a **Linear Regression** model. The dataset contains various features affecting house prices, such as location, size, number of bedrooms, bathrooms, and total square footage. The goal is to build a predictive model that can estimate house prices based on these attributes.  

## Table of Contents  
1. [Project Overview](#project-overview)  
2. [Folder Structure](#folder-structure)  
3. [Dataset](#dataset)  
4. [Installation](#installation)  
5. [Model Development](#model-development)  
6. [Usage](#usage)  
7. [Results](#results)  
8. [Conclusion](#conclusion)  
9. [Future Work](#future-work)  
10. [Contact](#contact)  

## Folder Structure  
```plaintext  
House-Price-Prediction-Model/  
├── code/              # Core scripts for data preprocessing and model training  
│   ├── preprocess.py  # Data cleaning and preprocessing scripts  
│   ├── train.py       # Model training and evaluation script  
│   └── utils.py       # Helper functions  
├── Dataset/           # Dataset used for the project  
│   └── Bengaluru_House_Data.csv  
├── client/            # React application for the frontend  
│   ├── public/  
│   ├── src/  
│   │   ├── App.js     # Main React component  
│   │   ├── components/  
│   │   │   └── Form.js  # Component for entering house details  
│   │   └── api.js     # API integration for server communication  
│   ├── package.json   # Dependencies for the React app  
│   └── README.md      # Frontend-specific documentation  
├── server/            # Flask application for the backend  
│   ├── server.py      # Main Flask app to serve predictions  
│   ├── requirements.txt  # Backend dependencies  
│   └── model.pkl      # Trained model file  
└── README.md          # Documentation for the project  
```  

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
#### Backend Dependencies:  
Navigate to the `server/` folder and install the necessary libraries:  
```bash  
cd server  
pip install -r requirements.txt  
```  

#### Frontend Dependencies:  
Navigate to the `client/` folder and install the required packages:  
```bash  
cd client  
npm install  
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
### Backend:  
The backend is implemented using Flask and serves predictions via a REST API.  

1. **Start the Flask Server**:  
   Navigate to the `server/` folder and run:  
   ```bash  
   python server.py  
   ```  
   The server will be accessible at `http://127.0.0.1:5000/`.  

2. **Test the API**:  
   Use tools like Postman or cURL to send house details (e.g., location, size, total square footage) to the API endpoint `/predict` and get the predicted house price.  

### Frontend:  
The frontend is a React application for user interaction.  

1. **Start the React Application**:  
   Navigate to the `client/` folder and run:  
   ```bash  
   npm start  
   ```  
   The React app will open in your browser at `http://localhost:3000/`.  

2. **Predict House Prices**:  
   Use the form provided in the app to input house details and view the predicted price. The app sends data to the Flask server and displays the results in real time.  

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
- **Web Application**: Enhancing the React and Flask integration for a more seamless user experience.  

## Contact  
For any questions or feedback, please reach out at [srinivasg3112@gmail.com](mailto:srinivasg3112@gmail.com).  
