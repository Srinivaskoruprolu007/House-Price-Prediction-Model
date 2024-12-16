
const LocationDropdown = ({ locations, selectedLocation, onChange }) => {
    return (
        <select
            value={selectedLocation}
            onChange={(e) => onChange(e.target.value)}
            className="w-full border rounded-md p-2 text-sm"
        >
            <option value="" disabled>Select a location</option>
            {locations.map((location, index) => (
                <option key={index} value={location}>
                    {location}
                </option>
            ))}
        </select>
    );
};

export default LocationDropdown;
