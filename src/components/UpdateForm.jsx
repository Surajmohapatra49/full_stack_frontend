import React, { useState, useEffect } from 'react';
import './UpdateForm.css';

const UpdateForm = ({ property, onUpdate, onCancel }) => {
  const [updatedProperty, setUpdatedProperty] = useState(property);
  const [propertyFor, setPropertyFor] = useState(property.property_for);

  useEffect(() => {
    setUpdatedProperty(property);
    setPropertyFor(property.property_for);
  }, [property]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProperty(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'property_for') {
      setPropertyFor(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedProperty);
  };

  return (
    <div className="update-form">
      <h2>Update Property</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Property Name:
          <input type="text" name="property_name" value={updatedProperty.property_name} onChange={handleChange} />
        </label>
        <label>
          Property For:
          <select name="property_for" value={updatedProperty.property_for} onChange={handleChange}>
            <option value="">property for</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </label>
        <label>
          BHK:
          <input type="number" name="bhk" value={updatedProperty.bhk} onChange={handleChange} />
        </label>
        {propertyFor === 'sale' && (
          <label>
            Sell Amount:
            <input type="number" name="sell_amount" value={updatedProperty.sell_amount} onChange={handleChange} />
          </label>
        )}
        {propertyFor === 'rent' && (
          <label>
            Rent Amount:
            <input type="number" name="rent_amount" value={updatedProperty.rent_amount} onChange={handleChange} />
          </label>
        )}
        <label>
          Country:
          <input type="text" name="country" value={updatedProperty.country} onChange={handleChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={updatedProperty.state} onChange={handleChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={updatedProperty.city} onChange={handleChange} />
        </label>
        <label>
          Locality:
          <input type="text" name="locality" value={updatedProperty.locality} onChange={handleChange} />
        </label>
        <label>
          Area:
          <input type="text" name="area" value={updatedProperty.area} onChange={handleChange} />
        </label>
        <label>
          Pincode:
          <input type="text" name="pincode" value={updatedProperty.pincode} onChange={handleChange} />
        </label>
        <label>
          Plot No:
          <input type="text" name="plot_no" value={updatedProperty.plot_no} onChange={handleChange} />
        </label>
        <label>
          Furnished:
          <select name="furnished" value={updatedProperty.furnished} onChange={handleChange}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <button type="submit" className='update'>Update</button>
        <button type="button" onClick={onCancel} className='cancel'>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateForm;
