import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ setCities }) {
  const [formData, setFormData] = useState({ name: '', country: '', population: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = { ...formData, id: Date.now().toString() };
    setCities(prev => [...prev, newCity]);
    navigate('/cities');
  };

  return (
    <div>
      <h2 className="section-title">Add City</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="details-label">Name:</label>
          <input type="text" placeholder="Seattle" onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div className="form-field">
          <label className="details-label">Country:</label>
          <input type="text" placeholder="USA" onChange={(e) => setFormData({...formData, country: e.target.value})} />
        </div>
        <div className="form-field">
          <label className="details-label">Population:</label>
          <input type="number" placeholder="733,919" onChange={(e) => setFormData({...formData, population: e.target.value})} />
        </div>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;