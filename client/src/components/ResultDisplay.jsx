

const ResultDisplay = ({ price }) => {
    return (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Estimated Price:</h2>
            {price !== null && price !== undefined ? (
                <p className="text-2xl text-green-600 font-bold">
                    ₹ {price.toLocaleString()} lakhs
                </p>
            ) : (
                <p className="text-gray-500">Enter details to get the price estimate.</p>
            )}
        </div>
    );
};

export default ResultDisplay;
