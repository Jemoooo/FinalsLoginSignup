import React, { useState } from 'react';
import './LoginSignup.css'; // Reuse your CSS
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = formData; // Use formData here
    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error); // Display error message
      } else {
        toast.success('Login successful!');
        setFormData({ email: '', password: '' }); // Reset form
        navigate('/'); // Navigate to home page
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <div className="login-container">
          <div className="login-header">
            <div className="login-text">Login</div>
            <div className="login-underline"></div>
          </div>
          <div className="login-inputs">
            <div className="login-input">
              <img src="/images/email.png" alt="" />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-input">
              <img src="/images/password.png" alt="" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="login-forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
          <div className="login-submit-container">
            <div className="login-submit" onClick={onSwitch}>
              Sign Up
            </div>
            <button type="submit" className="login-submit login-gray">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
