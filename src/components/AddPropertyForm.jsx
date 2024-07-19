import React, { useState } from 'react';
import axios from 'axios';
import './AddPropertyForm.css'; 
import { useNavigate } from 'react-router-dom';

const AddPropertyForm = () => {
  const [propertyDto, setPropertyDto] = useState({
    property_name: '',
    property_for: '',
    bhk: '',
    sell_amount: '',
    rent_amount: '',
    country: 'India',
    state: '',
    city: '',
    locality: '',
    area: '',
    plot_no: '' ,
    pincode: '',
    furnished: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setPropertyDto({ ...propertyDto, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/property', propertyDto); 
      console.log('Property added:', response.data);

      navigate('/Dashboard/PropertyList');
    } catch (error) {
      console.error('Error adding property:', error.message);
    }
  };

  const countryOptions = [
   
    "India",
    "United States",
    "Canada",
    "Australia",
    "United Kingdom",
    // Add more countries as needed
  ];

  return (
    <div className="add-property-form">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            name="property_name"
            placeholder="Property Name"
            value={propertyDto.property_name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <select
            className="drop"
            name="property_for"
            value={propertyDto.property_for}
            onChange={handleInputChange}
            required
          >
            <option value="">Property For</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        
        <div className="form-group">
          <input
            type="number"
            name="bhk"
            placeholder="BHK"
            value={propertyDto.bhk}
            onChange={handleInputChange}
            required
          />
        </div>
        
        {propertyDto.property_for === 'sale' && (
          <div className="form-group">
            <input
              type="number"
              name="sell_amount"
              placeholder="Sell Amount"
              value={propertyDto.sell_amount}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        
        {propertyDto.property_for === 'rent' && (
          <div className="form-group">
            <input
              type="number"
              name="rent_amount"
              placeholder="Rent Amount"
              value={propertyDto.rent_amount}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <select
            className='drop'
            name="country"
            value={propertyDto.country}
            onChange={handleInputChange}
            required
          >
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>


        <div className="form-group">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={propertyDto.state}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={propertyDto.city}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={propertyDto.area}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="locality"
            placeholder="Locality"
            value={propertyDto.locality}
            onChange={handleInputChange}
          />
        </div>


        <div className="form-group">
          <input
            type="number"
            name="plot_no"
            placeholder="Plot No"
            value={propertyDto.plot_no}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            value={propertyDto.pincode}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="furnished"
              checked={propertyDto.furnished}
              onChange={handleInputChange}
            />
            Furnished
          </label>
        </div>
        <button type="submit" className='button'>Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
