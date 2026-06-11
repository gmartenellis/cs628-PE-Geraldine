import { BrowserRouter, Routes, Route, Link, Navigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';
import './App.css'; 

function App() {
  const [cities, setCities] = useState([]);

  return (
    <BrowserRouter>
      <header>
        <h1>Cities Application</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/cities">Cities List</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add City</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="content-card">
          <Routes>
            <Route path="/" element={<Navigate to="/cities" />} />
            <Route path="/cities" element={<CitiesList cities={cities} />}>
              <Route path=":cityId" element={<CityDetails cities={cities} />} />
            </Route>
            <Route path="/add" element={<AddCity setCities={setCities} />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;