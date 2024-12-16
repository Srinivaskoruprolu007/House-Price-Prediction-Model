import  { useState, useEffect } from 'react';
import LocationDropdown from './LocationDropdown';
import { getLocations, predictPrice } from '../api';

const PricePredictionForm = ({ onPricePredicted }) => {
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState('');
    const [sqft, setSqft] = useState('');
    const [bhk, setBhk] = useState('');
    const [bath, setBath] = useState('');

    useEffect(() => {
        const fetchLocations = async () => {
            const locs = await getLocations();
            setLocations(locs);
        };
        fetchLocations();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const price = await predictPrice(location, sqft, bhk, bath);
        console.log(price)
        onPricePredicted(price);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
            <LocationDropdown
                locations={locations}
                selectedLocation={location}
                onChange={setLocation}
            />

            <input
                type="number"
                placeholder="Enter Square Footage"
                className="w-full border rounded-md p-2 text-sm"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter BHK"
                className="w-full border rounded-md p-2 text-sm"
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter Bathrooms"
                className="w-full border rounded-md p-2 text-sm"
                value={bath}
                onChange={(e) => setBath(e.target.value)}
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
                Predict Price
            </button>
        </form>
    );
};

export default PricePredictionForm;
