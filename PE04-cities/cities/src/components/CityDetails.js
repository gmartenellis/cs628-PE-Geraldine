import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {
  const { cityId } = useParams();
  // Find the selected city
  const city = cities.find(c => c.id === cityId);

  if (!city) return null;

  return (
    <div className="details-section">
      <h3 className="section-title">{city.name} Details</h3>
      <div className="details-field">
        <span className="details-label">Country:</span>
        <span className="details-value">{city.country}</span>
      </div>
      <div className="details-field">
        <span className="details-label">Population:</span>
        <span className="details-value">{city.population}</span>
      </div>
    </div>
  );
}

export default CityDetails;