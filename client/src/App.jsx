import  { useState } from 'react';
import PricePredictionForm from './components/PricePredictionFrom';
import ResultDisplay from './components/ResultDisplay';

const App = () => {
    const [predictedPrice, setPredictedPrice] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-6">House Price Predictor</h1>
                <PricePredictionForm onPricePredicted={setPredictedPrice} />
                <ResultDisplay price={predictedPrice} />
            </div>
        </div>
    );
};

export default App;
