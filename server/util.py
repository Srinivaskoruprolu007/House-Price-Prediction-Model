import json
import pickle
import numpy as np

__locations = None
__data_columns = None
__model = None


def get_estimated_price(location, sqft, bhk, bath):
    """Predict the price of a house given location, square footage, BHK, and bathrooms."""
    global __model, __data_columns
    if not __model or not __data_columns:
        raise Exception("Model or data columns not loaded. Call load_saved_artifacts() first.")
    
    try:
        loc_index = __data_columns.index(location.lower())
    except ValueError:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1

    return round(__model.predict([x])[0], 2)


def get_location_names():
    """Return the list of locations."""
    global __locations
    if not __locations:
        raise Exception("Locations not loaded. Call load_saved_artifacts() first.")
    return __locations


def load_saved_artifacts():
    """Load model and column data from files."""
    print("Loading saved artifacts...start")
    global __data_columns, __locations, __model

    try:
        with open("server/artifacts/columns.json", "r") as f:
            __data_columns = json.load(f)["data_columns"]
            __locations = __data_columns[3:]  # Assuming locations start from index 3
        
        with open("server/artifacts/bengaluru_house_price_model.pickle", "rb") as f:
            __model = pickle.load(f)

        print("Loading saved artifacts...done")
    except FileNotFoundError as e:
        raise Exception(f"Error loading artifacts: {e}")
