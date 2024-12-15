from flask import Flask, request, jsonify
from flask_cors import CORS
import util

app = Flask(__name__)
CORS(app)  # Enables Cross-Origin Resource Sharing

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    try:
        locations = util.get_location_names()
        response = jsonify({'locations': locations})
    except Exception as e:
        response = jsonify({'error': str(e)})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/predict_price', methods=['POST'])
def predict_price():
    try:
        data = request.form
        location = data['location']
        sqft = float(data['sqft'])
        bhk = int(data['bhk'])
        bath = int(data['bath'])
        
        estimated_price = util.get_estimated_price(location, sqft, bhk, bath)
        response = jsonify({'estimated_price': estimated_price})
    except Exception as e:
        response = jsonify({'error': str(e)})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    util.load_saved_artifacts()  # Load model and column data before serving requests
    app.run(host='0.0.0.0', port=5000, debug=True)
