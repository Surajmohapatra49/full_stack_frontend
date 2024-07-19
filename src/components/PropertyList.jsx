import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PropertyList.css';
import UpdateForm from './UpdateForm';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editPropertyId, setEditPropertyId] = useState(null);
  const [currentProperty, setCurrentProperty] = useState(null);

  useEffect(() => {
    fetchProperties(); 
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:5000/property');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error.message);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/property/search?propertyName=${searchTerm}`);
      setProperties(response.data);
    } catch (error) {
      console.error('Error searching properties:', error.message);
    }
  };

  const handleDeleteClick = async (propertyId) => {
    try {
      await axios.delete(`http://localhost:5000/property/${propertyId}`);
      setProperties(properties.filter(property => property._id !== propertyId));
    } catch (error) {
      console.error('Error deleting property:', error.message);
    }
  };

  const handleUpdateClick = (property) => {
    setCurrentProperty(property);
    setEditPropertyId(property._id);
  };

  const handleUpdateFormSubmit = async (updatedProperty) => {
    try {
      await axios.put(`http://localhost:5000/property/${updatedProperty._id}`, updatedProperty);
      setProperties(properties.map(property => property._id === updatedProperty._id ? updatedProperty : property));
      setEditPropertyId(null);
      setCurrentProperty(null);
    } catch (error) {
      console.error('Error updating property:', error.message);
    }
  };

  const filteredProperties = properties.filter(property =>
    property.property_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="property-list">
      <div className='srch'>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Search ..."
          />
          {/* <button className="search-button" onClick={handleSearchClick}>
            Search
          </button> */}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Property For</th>
            <th>BHK</th>
            <th>Sell Amount</th>
            <th>Rent Amount</th>
            <th>Location</th>
            <th>Furnished</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProperties.map(property => (
            <React.Fragment key={property._id}>
              <tr>
                <td>{property.property_name}</td>
                <td>{property.property_for}</td>
                <td>{property.bhk}</td>
                <td>{property.sell_amount}</td>
                <td>{property.rent_amount}</td>
                <td>{`${property.country}, ${property.state}, ${property.city}, ${property.locality}, ${property.area}, ${property.pincode}, ${property.plot_no}`}</td>
                <td>{property.furnished ? 'Yes' : 'No'}</td>
                <td>
                  <button className='delete' onClick={() => handleDeleteClick(property._id)}>
                    Delete
                  </button>
                  <button className='update' onClick={() => handleUpdateClick(property)}>Update</button>
                </td>
              </tr>
              {editPropertyId === property._id && (
                <tr>
                  <td colSpan="8">
                    <UpdateForm
                      property={currentProperty}
                      onUpdate={handleUpdateFormSubmit}
                      onCancel={() => setEditPropertyId(null)}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyList;
