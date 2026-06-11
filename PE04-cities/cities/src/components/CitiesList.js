import { Link, Outlet } from 'react-router-dom';

function CitiesList({ cities }) {
  return (
    <div className="cities-list-container">
      <h2 className="section-title">Cities List</h2>
      
      <div className="cities-list">
        <ul>
          {cities.map(city => (
            <li key={city.id}>
              <Link to={`/cities/${city.id}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default CitiesList;