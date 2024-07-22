import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    mobile: '',
  });

  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);// frontend url
      console.log('Registration successful:', response.data);

      navigate('/Login');
    } catch (error) {
      console.error('Registration failed:', error);

    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mobile No</label>
          <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <button type="submit">Register</button>
        </div>

      </form>
      <p>Have an account? <Link to='/login'>Login</Link></p>
    </div>
  );
};

export default Register;
