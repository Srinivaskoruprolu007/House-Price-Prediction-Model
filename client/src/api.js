import axios from 'axios';
import qs from 'qs'; // Importing qs for URL-encoding

const API_BASE_URL = 'http://127.0.0.1:5000';

// Function to fetch available locations from the backend
export const getLocations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get_location_names`);
        return response.data.locations;
    } catch (error) {
        console.error('Error fetching locations:', error);
        return [];
    }
};

// Function to predict the house price based on the given details
export const predictPrice = async (location, sqft, bhk, bath) => {
    try {
        // Log the data being sent to the backend for debugging
        console.log("Sending data:", { location, sqft, bhk, bath });

        // Use qs to encode the data in URL-encoded format
        const response = await axios.post(
            `${API_BASE_URL}/predict_price`,
            qs.stringify({
                location,
                sqft,
                bhk,
                bath,
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Set content type to form-urlencoded
                }
            }
        );

        // Log the response from the backend to verify the correct price
        console.log('API Response:', response);

        // Check if the response has the expected price value
        if (response.data && response.data.estimated_price) {
            return response.data.estimated_price;
        } else {
            console.error('Estimated price not found in response:', response);
            return undefined;
        }
    } catch (error) {
        console.error('Error predicting price:', error);
        return undefined;  // Return undefined if there's an error
    }
};
